const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const getDemoAPIKey = async () => {
  await axios
    .get('https://developer.wmata.com/Products')
    .then(response => {
      const $ = cheerio.load(response.data)

      const demoKeyForTest = $('.bg-primary.center-block').text()
      // create temp file so that key can be tested
      fs.writeFileSync(
        './demoKey.json',
        JSON.stringify({ demoKeyForTest }),
        'utf8',
        err => {
          if (err) {
            console.log('error writing', err)
          } else {
            console.log('completed writing')
          }
        },
      )
    })
    .catch(err => console.log('error receiving demo key'))
}

module.exports = async () => {
  await getDemoAPIKey().then(res => res)
}
