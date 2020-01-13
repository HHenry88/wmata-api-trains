const fs = require('fs')

// delete file after test finishes
const teardown = async () => {
  await fs.unlinkSync('./demoKey.json')
}

module.exports = async () => {
  await teardown().then(() => process.exit())
}
