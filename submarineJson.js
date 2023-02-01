const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
require('dotenv').config()

const submarineJson = async () => {
  try {
    const data = JSON.stringify({
      "content": {
        "name": "My NFT",
        "description": "This is an example",
        "external_url": "https://pinata.cloud"
      },
      "name": "My JSON",
      "metadata": {
        "keyvalues": {
          "one": "two"
        }
      }
    });
    const res = await axios.post('https://managed.mypinata.cloud/api/v1/content/json', data, {
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

submarineJson()
