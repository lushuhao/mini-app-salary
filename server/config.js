const path = require('path')

const dataDirPath = path.resolve(__dirname, '../data')

const dataName = {
  city: 'cityList.json',
  cityBase: 'cityBase.json'
}

module.exports = {
  dataDirPath,
  dataName
}