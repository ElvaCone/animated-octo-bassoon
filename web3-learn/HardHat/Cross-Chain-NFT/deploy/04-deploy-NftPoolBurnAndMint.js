module.exports = async ({ getNamedAccounts, deployments }) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments

    const wrappedNftDeployment = await deployments.get("WrappedNft")
    const ccipLocalSimulator = await ethers.getContract("CCIPLocalSimulator")
    const { destinationRouter_, linkToken_ } = await ccipLocalSimulator.configuration()

    log("NftPoolBurnAndMint delploying")
    await deploy("NftPoolBurnAndMint", {
        from: firstAccount,
        args: [destinationRouter_, linkToken_, wrappedNftDeployment.address],
        log: true
    })
    log("NftPoolBurnAndMint delployed successfully")
}

module.exports.tags = ["destChain", "all"]
