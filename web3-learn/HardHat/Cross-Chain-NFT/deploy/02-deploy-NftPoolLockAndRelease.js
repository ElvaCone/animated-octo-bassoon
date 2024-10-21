module.exports = async ({ getNamedAccounts, deployments }) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments

    const myNftDeployment = await deployments.get("MyNft")
    // const ccipLocalSimulatorDeployment = await deployments.get("CCIPLocalSimulator")
    const ccipLocalSimulator = await ethers.getContract("CCIPLocalSimulator")
    const { sourceRouter_, linkToken_ } = await ccipLocalSimulator.configuration()

    log("NftPoolLockAndRelease delploying")
    await deploy("NftPoolLockAndRelease", {
        from: firstAccount,
        args: [sourceRouter_, linkToken_, myNftDeployment.address],
        log: true
    })
    log("NftPoolLockAndRelease delployed successfully")
}

module.exports.tags = ["sourceChain", "all"]
