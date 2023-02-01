const axios = require('axios')
require('dotenv').config()

const deleteSubmarineContent = async (fileId) => {

  try {
    const res = await axios.delete(`https://managed.mypinata.cloud/api/v1/content/${fileId}`, {
      headers: {
        'x-api-key': `${process.env.SUBMARINE_KEY}`,
      }
    })
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

deleteSubmarineContent('bd10abc0-23be-4f36-b712-e5dc1f0b0e36')
