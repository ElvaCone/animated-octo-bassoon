// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract FundMe {
    AggregatorV3Interface internal dataFeed;

    mapping (address => uint256) public funderToAmount;
    uint256 constant MIN_VALUE = 1 * (10 ** 18) * (10 ** 8); // 1美元
    uint256 constant TARGET = 1 * (10 ** 18) * (10 ** 8);

    address owner;

    constructor() {
        owner = msg.sender;
        dataFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306); // ETH转USD的地址
    }

    function fund() external payable {
        require(convertEthToUsd(msg.value) >= MIN_VALUE, "Please send more!");
        funderToAmount[msg.sender] = msg.value;
    }

    // 得到的是乘以10的8次方之后的结果
    function getChainlinkDataFeedLatestAnswer() public view returns (int) {
        // prettier-ignore
        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = dataFeed.latestRoundData();
        return answer;
    }

    function convertEthToUsd(uint256 ethAmount) internal view returns (uint256) {
        uint256 ethPrice = uint256(getChainlinkDataFeedLatestAnswer());
        return ethAmount * ethPrice;
    }

    function transferOwnership(address newOwner) public {
        require(owner == msg.sender, "Owner only!");
        owner = newOwner;
    }

    function getFund() external {
        require(owner == msg.sender, "Owner only!");
        require(convertEthToUsd(address(this).balance) >= TARGET, "Target is not reached!");
        
    }
}

