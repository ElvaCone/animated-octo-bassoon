const { network } = require('hardhat');
const { MockV3Aggregator_decimals, MockV3Aggregator_initialAnswer, localChains } = require('../helper-hardhat-config.js');

module.exports = async ({ getNamedAccounts, deployments }) => {
    if (localChains.includes(network.name)) {
        const { firstAccount } = await getNamedAccounts()
        const { deploy } = deployments

        await deploy("MockV3Aggregator", {
            from: firstAccount,
            args: [MockV3Aggregator_decimals, MockV3Aggregator_initialAnswer],
            log: true
        })
    } else {
        console.log("Environment is not local, mock contract deployment skipped...")
    }
}

module.exports.tags = ["all", "mock"]
