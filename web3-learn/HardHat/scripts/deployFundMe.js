const { ethers, hre } = require("hardhat");
// const hre = require("hardhat");
require('@chainlink/env-enc').config()

const main = async () => {
    try {
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

        // 获取账户并进行交易
        const [firstAccount, secondAccount] = await ethers.getSigners()
        console.log(`2 accounts are ${firstAccount.address} and ${secondAccount.address}.`)
        
        // 第一个账户出资
        const firstTx = await fundMe.connect(firstAccount).fund({value: ethers.parseEther("0.001")}) // 默认连第一个账户，可以不写connect(firstAccount)
        await firstTx.wait()
        const balanceOfContractAfterFirstFund = await ethers.provider.getBalance(fundMe.target)
        console.log(`Balance of the contract after first fund is ${balanceOfContractAfterFirstFund}`)

        // 第二个账户出资
        const secondTx = await fundMe.connect(secondAccount).fund({value: ethers.parseEther("0.002")})
        await secondTx.wait()
        const balanceOfContractAfterSecondFund = await ethers.provider.getBalance(fundMe.target)
        console.log(`Balance of the contract after second fund is ${balanceOfContractAfterSecondFund}`)

        // 查询每个账户在合约中的余额
        const firstAccountBalanceInFundMe = await fundMe.checkFunderAmount(firstAccount.address)
        const secondAccountBalanceInFundMe = await fundMe.checkFunderAmount(secondAccount.address)
        console.log(`Balance of first account in FundMe is ${firstAccountBalanceInFundMe}`)
        console.log(`Balance of second account in FundMe is ${secondAccountBalanceInFundMe}`)
    } catch (error) {
        console.error("Deployment failed:", error);
        process.exit(1);
    }
};

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

main();
