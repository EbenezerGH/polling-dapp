// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 470000
      //from: 0x6c5aaaf1f7a5344a9f09d42e34d0a3560be51a06
    }
  }
}
