// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {FundMe} from "../FundMe/FundMe.sol";

contract FundTokenERC20 is ERC20 {
    FundMe fundMe;

    constructor(address fundMeAddr) ERC20("FundToken", "FT") {
        fundMe = FundMe(fundMeAddr);
    }

    function mint(uint256 amountToMint) public {
        require(fundMe.getFundSuccess() == true, "FundMe hasn't completed!");
        uint256 funderAmount = fundMe.checkFunderAmount(msg.sender);
        require(funderAmount >= amountToMint, "You don't have enough fund!");

        _mint(msg.sender, amountToMint);
        fundMe.setFunderToAmount(msg.sender, funderAmount - amountToMint);
    }

    function claim(uint256 amountToClaim) public {
        require(fundMe.getFundSuccess() == true, "FundMe hasn't completed!");
        require(balanceOf(msg.sender) >= amountToClaim, "You don't have enough ERC20 Token!");
        _burn(msg.sender, amountToClaim);
    }
}
