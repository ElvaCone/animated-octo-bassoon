// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract FundMe {
    AggregatorV3Interface public dataFeed;

    mapping(address => uint256) public funderToAmount;
    uint256 constant MIN_VALUE = 1 * (10**18) * (10**8); // 1美元
    uint256 constant TARGET = 1 * (10**18) * (10**8);

    address public owner;
    address private erc20Addr;

    uint256 deploymentTime;
    uint256 lockTime;

    bool public getFundSuccess = false;

    constructor(uint256 _lockTime) {
        require(_lockTime > 0, "Lock time must be greater than zero");
        owner = msg.sender;
        deploymentTime = block.timestamp; // 单位为秒
        lockTime = _lockTime;
        dataFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        ); // ETH转USD的地址
    }

    function fund() external payable {
        require(block.timestamp <= deploymentTime + lockTime, "Window closed!");
        require(convertEthToUsd(msg.value) >= MIN_VALUE, "Please send more!");
        funderToAmount[msg.sender] += msg.value;
    }

    // 得到的是乘以10的8次方之后的结果
    function getChainlinkDataFeedLatestAnswer() public view returns (int256) {
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

    function convertEthToUsd(uint256 ethAmount)
        internal
        view
        returns (uint256)
    {
        uint256 ethPrice = uint256(getChainlinkDataFeedLatestAnswer());
        return ethAmount * ethPrice;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }

    function getFund() external onlyOwner windowClosed {
        require(
            convertEthToUsd(address(this).balance) >= TARGET,
            "Target is not reached!"
        );

        // payable(msg.sender).transfer(address(this).balance);

        // bool success = payable(msg.sender).send(address(this).balance);
        // require(success, "Transfer tx failed!");

        bool success;
        (success, ) = payable(msg.sender).call{value: address(this).balance}(
            ""
        );
        require(success, "Transfer tx failed!");
        getFundSuccess = true;
    }

    function refund() external windowClosed {
        require(
            convertEthToUsd(address(this).balance) < TARGET,
            "Target is reached!"
        );
        uint256 amount = funderToAmount[msg.sender];
        require(amount != 0, "You haven't fund!");

        bool success;
        (success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Transfer tx failed!");
        funderToAmount[msg.sender] = 0;
    }

    function checkMyAmount() external view returns (uint256) {
        return funderToAmount[msg.sender];
    }

    function checkFunderAmount(address addr) external view returns (uint256) {
        return funderToAmount[addr];
    }

    function setFunderToAmount(address funder, uint256 amount) public {
        require(
            msg.sender == erc20Addr,
            "You dont't have permission to call this function!"
        );
        funderToAmount[funder] = amount;
    }

    function setErc20Addr(address _erc20Addr) public onlyOwner {
        erc20Addr = _erc20Addr;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "Owner only!");
        _;
    }

    modifier windowClosed() {
        require(
            block.timestamp > deploymentTime + lockTime,
            "Window not closed!"
        );
        _;
    }
}
