const { ethers, deployments, getNamedAccounts, network } = require('hardhat');
const { expect } = require('chai');
const { localChains, FundMe_lockTime, lessThanOneUsdParseString, greaterThanTwoUsdParseString } = require('../../helper-hardhat-config.js');

localChains.includes(network.name)
    ? describe.skip
    : describe("test FundMe contract", async () => {
        let firstAccount
        let fundMe
        beforeEach(async () => {
            await deployments.fixture(["all"])
            firstAccount = (await getNamedAccounts()).firstAccount
            const fundMeDeployment = await deployments.get("FundMe")
            fundMe = await ethers.getContractAt("FundMe", fundMeDeployment.address)
        })

        it("fund and getFund successfully", async () => {
            await fundMe.fund({ value: ethers.parseEther(greaterThanTwoUsdParseString) })
            await new Promise(resolve => setTimeout(resolve, FundMe_lockTime * 1000)) // setTimeout的时间单位是毫秒
            const getFundTx = await fundMe.getFund()
            const getFundReceipt = await getFundTx.wait()


            expect(getFundReceipt).to.emit(fundMe, "GetFundByOwner").withArgs(ethers.parseEther(greaterThanTwoUsdParseString))
        })

        it("fund and refund successfully", async () => {
            await fundMe.fund({ value: ethers.parseEther(lessThanOneUsdParseString) })
            await new Promise(resolve => setTimeout(resolve, FundMe_lockTime * 1000))
            const refundTx = await fundMe.refund()
            const refundReceipt = await refundTx.wait()


            expect(refundReceipt).to.emit(fundMe, "RefundByFunder").withArgs(firstAccount, ethers.parseEther(lessThanOneUsdParseString))
        })
    })
