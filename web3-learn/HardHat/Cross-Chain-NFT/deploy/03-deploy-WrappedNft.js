module.exports = async ({ getNamedAccounts, deployments }) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments

    log("WrappedNft delploying")
    await deploy("WrappedNft", {
        from: firstAccount,
        args: ["WrappedNft", "WNT"],
        log: true
    })
    log("WrappedNft delployed successfully")
}

module.exports.tags = ["destChain", "all"]
