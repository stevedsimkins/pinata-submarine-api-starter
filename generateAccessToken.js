const axios = require('axios')
require('dotenv').config()

const generateAccessToken = async (fileId, length) => {

  const data = JSON.stringify({
  "timeoutSeconds": length,
  "contentIds": [
      fileId
  ]
  })
  try {
    const res = await axios.post('https://managed.mypinata.cloud/api/v1/auth/content/jwt', data, {
      headers: {
        'x-api-key': `${process.env.SUBMARINE_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

generateAccessToken('86d4f1c5-589c-4ebf-b583-11ebb7575e83', 3600)
