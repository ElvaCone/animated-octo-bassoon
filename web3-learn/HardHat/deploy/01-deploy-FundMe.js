const { network } = require('hardhat');
const { FundMe_lockTime, testnetChainsConfig, localChains, testnetWaitConfirmations } = require('../helper-hardhat-config.js');

// module.exports = async (hre) => {
//     const getNamedAccounts = hre.getNamedAccounts
//     const deployments = hre.deployments
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy } = deployments

    let dataFeedAddr
    let waitConfirmations
    if (localChains.includes(network.name)) {
        const mockV3Aggregator = await deployments.get("MockV3Aggregator")
        dataFeedAddr = mockV3Aggregator.address
        waitConfirmations = 0
    } else {
        dataFeedAddr = testnetChainsConfig[network.config.chainId].ethUsdDataFeedAddr
        waitConfirmations = testnetWaitConfirmations
    }

    const fundMe = await deploy("FundMe", {
        from: firstAccount,
        args: [FundMe_lockTime, dataFeedAddr],
        log: true,
        waitConfirmations: waitConfirmations
    })

    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        await hre.run("verify:verify", {
            address: fundMe.address,
            constructorArguments: [FundMe_lockTime, dataFeedAddr],
        });
    } else {
        console.log("Network is not sepolia, verification skipped...")
    }
}

// module.exports = async ({ getNamedAccounts, deployments }) => {
//     const [deployer] = await ethers.getSigners();
//     const { deploy } = deployments
//     await deploy("FundMe", {
//         from: deployer,
//         args: [FundMe_lockTime],
//         log: true
//     })
// }

module.exports.tags = ["all", "FundMe"]
