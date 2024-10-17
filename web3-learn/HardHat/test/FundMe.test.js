const { ethers, deployments, getNamedAccounts } = require('hardhat');
const { assert } = require('chai');

describe("test FundMe contract", async () => {
    let firstAccount
    let fundMe
    beforeEach(async () => {
        await deployments.fixture(["all"])
        firstAccount = (await getNamedAccounts()).firstAccount
        const fundMeDeployment = await deployments.get("FundMe")
        fundMe = await ethers.getContractAt("FundMe", fundMeDeployment.address)
    })

    const lockTime = 180;

    // it("test if the owner is msg.sender", async () => {
    //     const [firstAccount] = await ethers.getSigners()
    //     const fundMeFactory = await ethers.getContractFactory("FundMe")
    //     const fundMe = await fundMeFactory.deploy(lockTime)
    //     await fundMe.waitForDeployment()
    //     assert.equal((await fundMe.owner()), firstAccount)
    // })

    it("test if the dataFeed is assigned correctly", async () => {
        const [firstAccount] = await ethers.getSigners()
        const fundMeFactory = await ethers.getContractFactory("FundMe")
        const fundMe = await fundMeFactory.deploy(lockTime)
        await fundMe.waitForDeployment()
        assert.equal((await fundMe.dataFeed()), "0x694AA1769357215DE4FAC081bf1f309aDC325306")
    })

    // it("getFund", async () => {
    //     const fundMeFactory = await ethers.getContractFactory("FundMe")
    //     const fundMe = fundMeFactory.attach("0x246D249ac02A9E11e05AE92A00779BC251d92139")
    //     await fundMe.getFund()
    // })
})
