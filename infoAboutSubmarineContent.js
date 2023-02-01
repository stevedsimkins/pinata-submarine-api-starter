const axios = require('axios')
require('dotenv').config()

const infoAboutSubmarineContent = async (fileId) => {
  try {
    const res = await axios.get(`https://managed.mypinata.cloud/api/v1/content/${fileId}`, {
      headers: {
        'x-api-key': `${process.env.SUBMARINE_KEY}`,
      }
    })
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

infoAboutSubmarineContent('e9233e8b-1747-4f05-8d66-7009a7e3216c')
