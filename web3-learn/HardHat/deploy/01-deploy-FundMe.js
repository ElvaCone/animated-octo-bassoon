// module.exports = async (hre) => {
//     const getNamedAccounts = hre.getNamedAccounts
//     const deployments = hre.deployments
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy } = deployments
    await deploy("FundMe", {
        from: firstAccount,
        args: [180],
        log: true
    })
}

// module.exports = async ({ getNamedAccounts, deployments }) => {
//     const [deployer] = await ethers.getSigners();
//     const { deploy } = deployments
//     await deploy("FundMe", {
//         from: deployer,
//         args: [180],
//         log: true
//     })
// }

module.exports.tags = ["all", "FundMe"]
