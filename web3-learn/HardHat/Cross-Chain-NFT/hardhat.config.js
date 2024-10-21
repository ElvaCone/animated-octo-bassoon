// 这一堆是hardhat-deploy相关的：
require("@nomicfoundation/hardhat-ethers");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require('@nomicfoundation/hardhat-chai-matchers');
require('@nomicfoundation/hardhat-ethers');
require('@typechain/hardhat');
require('hardhat-gas-reporter');
require('solidity-coverage');

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  namedAccounts: {
    firstAccount: {
      default: 0
    }
  }
};
