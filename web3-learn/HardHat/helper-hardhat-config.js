
module.exports = {
    MockV3Aggregator_decimals: 8, // 精度
    MockV3Aggregator_initialAnswer: 263456000000, // 乘以10的8次方之后的结果，按照这个算的话1美元等于0.0003795700230778574个ETH
    FundMe_lockTime: 180, // 单位是秒
    FundMe_lockTime_more: 200, // 单位是秒
    localChains: ['hardhat', 'local'], // 本地网络
    testnetChainsConfig: { // 测试网
        11155111: { // sepolia
            ethUsdDataFeedAddr: "0x694AA1769357215DE4FAC081bf1f309aDC325306"
        },
        97: { // Binance Smart Chain (BSC) Testnet
            ethUsdDataFeed: "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7"
        }
    },
    testnetWaitConfirmations: 2, // 等待几个块，防止etherscan还没收录
}
