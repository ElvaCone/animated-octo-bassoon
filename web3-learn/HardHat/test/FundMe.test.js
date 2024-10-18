const { ethers, deployments, getNamedAccounts } = require('hardhat');
const { assert } = require('chai');
const { FundMe_lockTime } = require('../helper-hardhat-config.js');
const helpers = require('@nomicfoundation/hardhat-network-helpers');

describe("test FundMe contract", async () => {
    let firstAccount
    let fundMe
    beforeEach(async () => {
        await deployments.fixture(["all"])
        firstAccount = (await getNamedAccounts()).firstAccount
        const fundMeDeployment = await deployments.get("FundMe")
        const mockV3AggregatorDeployment = await deployments.get("MockV3Aggregator")
        fundMe = await ethers.getContractAt("FundMe", fundMeDeployment.address)
    })

    it("owner is msg.sender", async () => {
        /* const [firstAccount] = await ethers.getSigners()
        const fundMeFactory = await ethers.getContractFactory("FundMe")
        const fundMe = await fundMeFactory.deploy(FundMe_lockTime) */
        assert.equal((await fundMe.owner()), firstAccount)
    })

    it("dataFeed is assigned correctly", async () => {
        assert.equal((await fundMe.dataFeed()), mockV3AggregatorDeployment.address) // strictEqual 会强制类型和值都相等，减少潜在的类型转换错误
    })

    // it("getFund", async () => {
    //     /* const fundMeFactory = await ethers.getContractFactory("FundMe")
    //     const fundMe = fundMeFactory.attach("0x246D249ac02A9E11e05AE92A00779BC251d92139") */
    //     await fundMe.getFund()
    // })
})
