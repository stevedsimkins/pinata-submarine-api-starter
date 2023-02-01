const axios = require('axios')
require('dotenv').config()

const querySubmarineContent = async () => {
  try {
    const res = await axios.get('https://managed.mypinata.cloud/api/v1/content', {
      headers: {
        'x-api-key': `${process.env.SUBMARINE_KEY}`,
      }
    })
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

querySubmarineContent()
