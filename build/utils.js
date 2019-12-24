const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const getPackageConfig = () => {
  return require(resolve('../package.json'))
}

module.exports = {
  resolve,
  getPackageConfig
}
