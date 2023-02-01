const axios = require('axios')
require('dotenv').config()

const updateSubmarineContent = async (fileId) => {

  const data = JSON.stringify({
    "name":"new name",
  })
  try {
    const res = await axios.put(`https://managed.mypinata.cloud/api/v1/content/${fileId}`, data, {
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

updateSubmarineContent('bd10abc0-23be-4f36-b712-e5dc1f0b0e36')
