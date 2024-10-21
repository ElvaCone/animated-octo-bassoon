module.exports = async ({ getNamedAccounts, deployments }) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments

    log("CCIPLocalSimulator delploying")
    await deploy("CCIPLocalSimulator", {
        from: firstAccount,
        args: [],
        log: true
    })
    log("CCIPLocalSimulator delployed successfully")
}

module.exports.tags = ["test", "all"]
