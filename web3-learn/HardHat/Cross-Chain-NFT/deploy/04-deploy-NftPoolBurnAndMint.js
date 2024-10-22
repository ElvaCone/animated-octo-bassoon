module.exports = async ({ getNamedAccounts, deployments }) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments

    const wrappedNftDeployment = await deployments.get("WrappedNft")
    const ccipLocalSimulator = await ethers.getContract("CCIPLocalSimulator")
    const { destinationRouter_, linkToken_ } = await ccipLocalSimulator.configuration()

    log("NftPoolBurnAndMint deploying")
    const nftPoolBurnAndMint = await deploy("NftPoolBurnAndMint", {
        from: firstAccount,
        args: [destinationRouter_, linkToken_, wrappedNftDeployment.address],
        log: true
    })
    log("NftPoolBurnAndMint deployed successfully")

    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        await hre.run("verify:verify", {
            address: nftPoolBurnAndMint.address,
            constructorArguments: [destinationRouter_, linkToken_, wrappedNftDeployment.address],
        });
    } else {
        console.log("Network is not sepolia, verification skipped...")
    }
}

module.exports.tags = ["destChain", "all"]
