const { getNamedAccounts, deployments, ethers } = require("hardhat")
const { expect } = require("chai")

let firstAccount
let myNft
let wrappedNft
let nftPoolLockAndRelease
let nftPoolBurnAndMint
before(async () => {
    await deployments.fixture("all")
    firstAccount = (await getNamedAccounts()).firstAccount
    myNft = await ethers.getContract("MyNft")
    wrappedNft = await ethers.getContract("WrappedNft")
    nftPoolLockAndRelease = await ethers.getContract("NftPoolLockAndRelease")
    nftPoolBurnAndMint = await ethers.getContract("NftPoolBurnAndMint")
})

describe("test if the nft can be minted successfully", async () => {
    it("test if the owner of nft is minter", async () => {
        await myNft.safeMint(firstAccount)
        // const ownerOfFirstNft = await myNft.ownerOf(0)
        expect(await myNft.ownerOf(0)).to.equal(firstAccount)
    })
})

