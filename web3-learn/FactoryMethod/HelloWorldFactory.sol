// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {HelloWorld} from "BasicSyntax/BasicSyntax.sol";
// import {HelloWorld} from "https://github.com/smartcontractkit/Web3_tutorial_Chinese/blob/main/lesson-2/HelloWorld.sol";



contract HelloWorldFactory {
    HelloWorld hw;

    HelloWorld[] hws;

    function createHelloWorld() public {
        hw = new HelloWorld();
        hws.push(hw);
    }

    // 合约类型本质上是一个指针，指向链上存储的合约实例。因此，不需要使用 memory 修饰符，因为这里并不是将合约数据复制到内存，而是直接返回存储在区块链中的合约引用。
    function getHelloWorldByIndex(uint256 _index) public view returns (HelloWorld) {
        return hws[_index];
    }

    function callSayHelloFromFactory(uint256 _index, uint256 _id) public view returns (string memory) {
        return  hws[_index].sayHello(_id);
    }

    function callSetHelloFromFactory(uint256 _index, string memory newString, uint256 _id) public {
        hws[_index].setHello(newString, _id);
    }
}
