module.exports = async ({ getNamedAccounts, deployments }) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments

    log("WrappedNft delploying")
    const wrappedNft = await deploy("WrappedNft", {
        from: firstAccount,
        args: ["WrappedNft", "WNT"],
        log: true
    })
    log("WrappedNft delployed successfully")

    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        await hre.run("verify:verify", {
            address: wrappedNft.address,
            constructorArguments: ["WrappedNft", "WNT"],
        });
    } else {
        console.log("Network is not sepolia, verification skipped...")
    }
}

module.exports.tags = ["destChain", "all"]
