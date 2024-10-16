const { ethers } = require("hardhat");

const main = async () => {
    try {
        const fundMeFactory = await ethers.getContractFactory("FundMe");
        console.log("Beginning deployment...");
        const fundMe = await fundMeFactory.deploy(10);
        await fundMe.waitForDeployment();
        console.log(`Deployed successfully, address is ${fundMe.target}`);
    } catch (error) {
        console.error("Deployment failed:", error);
        process.exit(1);
    }
};

main();
