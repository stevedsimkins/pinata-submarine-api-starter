const axios = require('axios')
require('dotenv').config()

const unsubmarineContent = async (fileId) => {

  const data = JSON.stringify({
    "name":"my file",
    "pinToIPFS": true
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

unsubmarineContent('e9233e8b-1747-4f05-8d66-7009a7e3216c')
