module.exports = async ({ getNamedAccounts, deployments }) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments

    log("MyNft delploying")
    const myNft = await deploy("MyNft", {
        from: firstAccount,
        args: ["MyNft", "MNT"],
        log: true
    })
    log("MyNft delployed successfully")

    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        await hre.run("verify:verify", {
            address: myNft.address,
            constructorArguments: ["MyNft", "MNT"],
        });
    } else {
        console.log("Network is not sepolia, verification skipped...")
    }
}

module.exports.tags = ["sourceChain", "all"]
