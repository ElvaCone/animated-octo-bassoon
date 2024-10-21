module.exports = async ({ getNamedAccounts, deployments }) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments

    const myNftDeployment = await deployments.get("MyNft")
    // const ccipLocalSimulatorDeployment = await deployments.get("CCIPLocalSimulator")
    const ccipLocalSimulator = await ethers.getContract("CCIPLocalSimulator")
    const { sourceRouter_, linkToken_ } = await ccipLocalSimulator.configuration()

    log("NftPoolLockAndRelease delploying")
    const nftPoolLockAndRelease = await deploy("NftPoolLockAndRelease", {
        from: firstAccount,
        args: [sourceRouter_, linkToken_, myNftDeployment.address],
        log: true
    })
    log("NftPoolLockAndRelease delployed successfully")

    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        await hre.run("verify:verify", {
            address: nftPoolLockAndRelease.address,
            constructorArguments: [sourceRouter_, linkToken_, myNftDeployment.address],
        });
    } else {
        console.log("Network is not sepolia, verification skipped...")
    }
}

module.exports.tags = ["sourceChain", "all"]
