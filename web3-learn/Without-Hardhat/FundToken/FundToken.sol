// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FundToken {
    address public owner;
    uint256 public totalSupply;
    mapping(address => uint256) private balances;
    string public tokenName;
    string public tokenSymbol;

    constructor(string memory _tokenName, string memory _tokenSymbol) {
        tokenName = _tokenName;
        tokenSymbol = _tokenSymbol;
        owner = msg.sender;
    }

    function mint(uint256 amount) public {
        positiveAmount(amount);
        balances[msg.sender] += amount;
        totalSupply += amount;
    }

    function transfer(address payee, uint256 amount) public {
        positiveAmount(amount);
        require(
            balances[msg.sender] >= amount,
            "You don't have enough balance!"
        );

        balances[msg.sender] -= amount;
        balances[payee] += amount;
    }

    function balanceOf(address addr) public view returns (uint256) {
        return balances[addr];
    }

    function positiveAmount(uint256 amount) internal pure {
        require(amount > 0, "Amount must be positive!");
    }
}
