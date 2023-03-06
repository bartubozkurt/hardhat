require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");


module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "testnetBSC",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.alchemyApiKey}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    avaxTest:{
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      accounts: [process.env.PRIVATE_KEY],
    },
    testnetBSC: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.PRIVATE_KEY],
    },
    bscMainnet: {
      url: "https://bsc-dataseed3.binance.org/",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: "",
      bscTestnet: "",
    },
  },
};