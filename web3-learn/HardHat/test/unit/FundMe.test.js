const { ethers, deployments, getNamedAccounts } = require('hardhat');
const { assert, expect } = require('chai');
const { FundMe_lockTime_more, lessThanOneUsdParseString, greaterThanOneUsdParseString } = require('../../helper-hardhat-config.js');
const helpers = require('@nomicfoundation/hardhat-network-helpers');

describe("test FundMe contract", async () => {
    let firstAccount
    let fundMe
    let fundMeWithSecondAccount
    let mockV3AggregatorDeployment
    beforeEach(async () => {
        await deployments.fixture(["all"])
        firstAccount = (await getNamedAccounts()).firstAccount
        secondAccount = (await getNamedAccounts()).secondAccount
        const fundMeDeployment = await deployments.get("FundMe")
        mockV3AggregatorDeployment = await deployments.get("MockV3Aggregator")
        fundMe = await ethers.getContractAt("FundMe", fundMeDeployment.address)
        fundMeWithSecondAccount = await ethers.getContract("FundMe", secondAccount)

        // 两者对比：
        // ethers.getContractAt(): Requires an ABI and an explicit contract address. It's a more generic way to obtain a contract instance and can be used in any Ethers.js context.
        // ethers.getContract() (provided by Hardhat): Uses deployment data from Hardhat's deployment system. It’s more convenient within Hardhat projects because it automatically knows the ABI and address from the deployment artifacts.
    })

    it("owner is msg.sender", async () => {
        /* const [firstAccount] = await ethers.getSigners()
        const fundMeFactory = await ethers.getContractFactory("FundMe")
        const fundMe = await fundMeFactory.deploy(FundMe_lockTime) */

        const owner = await fundMe.owner();

        assert.strictEqual(owner.toLowerCase(), firstAccount.toLowerCase())// 建议使用strictEqual而不是equal，因为strictEqual会强制比较类型和值，以避免潜在的类型转换错误
    })

    it("dataFeed is assigned correctly", async () => {
        const dataFeedAddress = await fundMe.dataFeed();

        assert.strictEqual(dataFeedAddress.toLowerCase(), mockV3AggregatorDeployment.address.toLowerCase())
    })

    it("window closed, value enough, fund failed", async () => {
        await helpers.time.increase(FundMe_lockTime_more)

        await helpers.mine() // 通常在增加时间后，需要手动挖掘一个新的区块，以使增加的时间在链上的状态中得到反映 // 如果确信您的测试环境会在每次交易时自动挖矿（Hardhat 通常是这样的），那么这行可以不写
        await expect(fundMe.fund({ value: ethers.parseEther(greaterThanOneUsdParseString) })).to.be.revertedWith("Window closed!") // to.be.revertedWith("xxx") 是检查事务被拒绝（回退）的期望，需要在事务完成之后进行。所以要有 await ，使用 await 可以保证事务已经被发出并且处理完毕，从而可以正确地捕获可能的回退信息。 // 保留 helpers.mine() 的好处是，即使将来您的测试框架或配置发生改变，测试代码的行为依然会如预期，这样可以使测试更加稳定和独立于特定环境的默认行为。
    })

    it("window open, value not enough, fund failed", async () => {
        await expect(fundMe.fund({ value: ethers.parseEther(lessThanOneUsdParseString) })).to.be.revertedWith("Please send more!")
    })

    it("window open, value enough, fund success", async () => {
        await fundMe.fund({ value: ethers.parseEther(greaterThanOneUsdParseString) })
        const firstAccountAmount = await fundMe.funderToAmount(firstAccount)

        expect(firstAccountAmount).to.deep.equal(ethers.parseEther(greaterThanOneUsdParseString)) // ethers.parseEther() 返回一个 BigNumber，而 to.equal(...) 直接比较两个 BigNumber 可能会导致测试失败，因为 to.equal() 是严格相等比较（引用相等），而不是内容相等。 // 使用 to.deep.equal(...) 或 to.be.bignumber.equal(...)，它们会比较 BigNumber 的值，而不是引用。或者可以将值转换为字符串以进行比较。
    })

    it("not owner, window closed, target reached, getFund failed", async () => {
        fundMe.fund({ value: ethers.parseEther(greaterThanOneUsdParseString) })
        await helpers.time.increase(FundMe_lockTime_more)
        await helpers.mine()

        await expect(fundMeWithSecondAccount.getFund()).to.be.revertedWith("Owner only!")
    })

    it("is owner, window open, target reached, getFund failed", async () => {
        fundMe.fund({ value: ethers.parseEther(greaterThanOneUsdParseString) })

        await expect(fundMe.getFund()).to.be.revertedWith("Window not closed!")
    })

    it("is owner, window closed, target not reached, getFund failed", async () => {
        fundMe.fund({ value: ethers.parseEther(lessThanOneUsdParseString) })
        await helpers.time.increase(FundMe_lockTime_more)
        await helpers.mine()

        await expect(fundMe.getFund()).to.be.revertedWith("Target is not reached!")
    })


    // it("getFund", async () => {
    //     /* const fundMeFactory = await ethers.getContractFactory("FundMe")
    //     const fundMe = fundMeFactory.attach("0x246D249ac02A9E11e05AE92A00779BC251d92139") */
    //     await fundMe.getFund()
    // })
})
