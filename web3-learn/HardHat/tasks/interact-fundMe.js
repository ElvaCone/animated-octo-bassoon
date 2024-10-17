const { task } = require('hardhat/config');
// const { ethers } = require("hardhat"); // 不行，task文件会被导入到配置文件，而配置文件中require("hardhat")会导致报错

task("interact-fundMe", "interact with fundMe").addParam("addr", "fundMe contract address").setAction(async (taskArgs, hre) => {
    const fundMeFactory = await hre.ethers.getContractFactory("FundMe")
    const fundMe = fundMeFactory.attach(taskArgs.addr) // 访问已有合约用attach函数 // 不需要await

    // 获取账户并进行交易
    const [firstAccount, secondAccount] = await hre.ethers.getSigners()
    console.log(`2 accounts are ${firstAccount.address} and ${secondAccount.address}.`)

    // 第一个账户出资
    const firstTx = await fundMe.connect(firstAccount).fund({ value: hre.ethers.parseEther("0.001") }) // 默认连第一个账户，可以不写connect(firstAccount)
    await firstTx.wait()
    const balanceOfContractAfterFirstFund = await hre.ethers.provider.getBalance(fundMe.target)
    console.log(`Balance of the contract after first fund is ${balanceOfContractAfterFirstFund}`)

    // 第二个账户出资
    const secondTx = await fundMe.connect(secondAccount).fund({ value: hre.ethers.parseEther("0.002") })
    await secondTx.wait()
    const balanceOfContractAfterSecondFund = await hre.ethers.provider.getBalance(fundMe.target)
    console.log(`Balance of the contract after second fund is ${balanceOfContractAfterSecondFund}`)

    // 查询每个账户在合约中的余额
    const firstAccountBalanceInFundMe = await fundMe.checkFunderAmount(firstAccount.address)
    const secondAccountBalanceInFundMe = await fundMe.checkFunderAmount(secondAccount.address)
    console.log(`Balance of first account in FundMe is ${firstAccountBalanceInFundMe}`)
    console.log(`Balance of second account in FundMe is ${secondAccountBalanceInFundMe}`)
})
