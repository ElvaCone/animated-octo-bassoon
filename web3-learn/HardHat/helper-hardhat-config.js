
module.exports = {
    MockV3Aggregator_decimals: 8,
    MockV3Aggregator_initialAnswer: 261312000000,
    FundMe_lockTime: 180,
    localChains: ['hardhat', 'local'],
    testnetChainsConfig: {
        11155111: { // sepolia
            ethUsdDataFeedAddr: "0x694AA1769357215DE4FAC081bf1f309aDC325306"
        },
        97: { // Binance Smart Chain (BSC) Testnet
            ethUsdDataFeed: "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7"
        }
    },
    testnetWaitConfirmations: 2,
}
