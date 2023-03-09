
const Web3 = require('web3');
const web3 = new Web3('https://sepolia.etherscan.io/');
const test = async()=>{
    web3.eth.getBlockNumber().then(console.log);
    try {
        const blockNumber = await web3.eth.getBlockNumber();
        console.log(blockNumber);
      } catch (error) {
        console.error(error);
      }
}
export default test;
  