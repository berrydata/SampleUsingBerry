require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 6721975, // default ganache-cli value
    },
    testnet: {
      provider: () => new HDWalletProvider(privateKey, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(privateKey, 'https://bsc-dataseed1.binance.org'),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.7.0",
    },
  },
  mocha: {
    enableTimeouts: false,
    before_timeout: 210000, // Here is 2min but can be whatever timeout is suitable for you.
  },
};
