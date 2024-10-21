const { ethers, deployments, getNamedAccounts, network } = require('hardhat');
const { expect } = require('chai');
const { localChains, FundMe_lockTime, lessThanOneUsdParseString, greaterThanTwoUsdParseString } = require('../../helper-hardhat-config.js');

localChains.includes(network.name)
    ? describe.skip
    : describe("test FundMe contract", () => {
        let firstAccount
        let fundMe
        beforeEach(async () => {
            await deployments.fixture(["all"])
            firstAccount = (await getNamedAccounts()).firstAccount
            // expect(firstAccount).to.not.be.undefined
            const fundMeDeployment = await deployments.get("FundMe")
            fundMe = await ethers.getContractAt("FundMe", fundMeDeployment.address)
        })

        it("fund and getFund successfully", async () => {
            const fundAmount = ethers.parseEther(greaterThanTwoUsdParseString);
            // const nonce = await ethers.provider.getTransactionCount(firstAccount, "latest");
            // await fundMe.fund({
            //     value: fundAmount,
            //     nonce
            // });
            const fundTx = await fundMe.fund({ value: fundAmount });
            const fundReceipt = await fundTx.wait(); // 确保交易被确认
            expect(fundReceipt.status).to.equal(1); // 检查交易是否成功

            await new Promise(resolve => setTimeout(resolve, FundMe_lockTime * 1000)) // setTimeout的时间单位是毫秒

            const getFundTx = await fundMe.getFund();
            await getFundTx.wait(); // 确保交易被确认


            await expect(getFundTx).to.emit(fundMe, "GetFundByOwner").withArgs(fundAmount).catch((error) => {
                console.error("Error in fund and getFund test:", error);
                throw error;
            })
        })

        it("fund and refund successfully", async () => {
            const fundAmount = ethers.parseEther(lessThanOneUsdParseString);
            await fundMe.fund({ value: fundAmount })

            await new Promise(resolve => setTimeout(resolve, FundMe_lockTime * 1000))

            const refundTx = await fundMe.refund();
            await refundTx.wait(); // 确保交易被确认

            await expect(refundTx).to.emit(fundMe, "RefundByFunder").withArgs(firstAccount, fundAmount)
        })
    })
