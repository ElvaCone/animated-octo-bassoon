module.exports = async ({ getNamedAccounts, deployments }) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments

    log("MyNft delploying")
    await deploy("MyNft", {
        from: firstAccount,
        args: ["MyNft", "MNT"],
        log: true
    })
    log("MyNft delployed successfully")
}

module.exports.tags = ["sourceChain", "all"]
