const { task } = require("hardhat/config");
// const hre = require("hardhat"); // hre在Hardhat的任务和脚本中是全局可用的，但还是建议显式导入 // 不行，task文件会被导入到配置文件，而配置文件中require("hardhat")会导致报错

task("deploy-fundMe", "deploy and verify FundMe").setAction(async (taskArgs, hre) => {
    const lockTime = 180;

    // 部署合约
    const fundMeFactory = await hre.ethers.getContractFactory("FundMe"); // 可以通过hre.ethers访问ethers
    console.log("Beginning deployment...");
    console.log(`Deploying to network: ${hre.network.name}`);
    const fundMe = await fundMeFactory.deploy(lockTime);
    await fundMe.waitForDeployment();
    console.log(`Deployed successfully, address is ${fundMe.target}`);

    // 检查网络并验证合约
    if (hre.network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for 2 confirmations...")
        await fundMe.deploymentTransaction().wait(2); // 等待2个区块确认
        await verifyFundMe(hre, fundMe.target, [lockTime])
    }
})

// 验证合约
const verifyFundMe = async (hre, fundMeAddr, args) => {
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
