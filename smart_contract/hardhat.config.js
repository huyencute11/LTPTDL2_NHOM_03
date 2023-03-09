require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/gIyKgeCxAHZLnSBjmSwTTxbK_ur45AfJ',
      accounts: ['9b0644c3d620ca6da67922a2c5022ef28d7952b0e035f543574a0ab4b9bbdfd5'],
    },
  },
};