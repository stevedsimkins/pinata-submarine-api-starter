const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
require('dotenv').config()

const submarineFile = async () => {
  try {
    let data = new FormData()
    data.append('files', fs.createReadStream('./assets/Pinnie.png'))
    data.append('name', 'Pinnie.png')
    data.append('pinToIPFS', 'false')

    const res = await axios.post('https://managed.mypinata.cloud/api/v1/content', data, {
      headers: {
        'x-api-key': `${process.env.SUBMARINE_KEY}`
      }
    })
    console.log(res.data)
  } catch (error) {
    console.log(error)
  } 
}

submarineFile()
