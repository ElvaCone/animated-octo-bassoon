const { task } = require("hardhat/config");

task("deploy-fundMe", "deploy and verify FundMe").setAction(async (taskArgs, hre) => {
    const lockTime = 180;

    // 部署合约
    const fundMeFactory = await ethers.getContractFactory("FundMe");
    console.log("Beginning deployment...");
    console.log(`Deploying to network: ${hre.network.name}`);
    const fundMe = await fundMeFactory.deploy(lockTime);
    await fundMe.waitForDeployment();
    console.log(`Deployed successfully, address is ${fundMe.target}`);

    // 检查网络并验证合约
    if (hre.network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for 2 confirmations...")
        await fundMe.deploymentTransaction().wait(2); // 等待2个区块确认
        await verifyFundMe(fundMe.target, [lockTime])
    }
})

// 验证合约
const verifyFundMe = async (fundMeAddr, args) => {
    try {
        await hre.run("verify:verify", {
            address: fundMeAddr,
            constructorArguments: args,
        });
        console.log("Contract verified successfully!");
    } catch (error) {
        console.error("Verification failed:", error);
    }
}
