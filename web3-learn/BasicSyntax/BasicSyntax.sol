// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
// comment: this is my first smart contract

contract HelloWorld {
    bool boolVar_1 = true;
    bool boolVar_2 = false;

    
    uint8 uint8Var = 255;
    uint256 uint256Var = 255555555555;
    uint uintVar = 123333333333333; // uint就是uint256

    int8 int8Var = -128;
    int256 int256Var = -128888888888888;
    int intVar = -12333333333333; // int就是int256

    bytes8 bytes8Var = "Hello Wo";
    bytes32 bytes32Var = "Hello World !"; // bytes不是bytes32

    string stringVar = "Hello World !";

    address addressVar = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;

    struct Info {
        string phrase;
        uint256 id;
        address addr;
    }

    Info[] infos;

    // mapping(uint256 => Info) infoMapping; // 这样写比较简洁
    mapping(uint256 id => Info info) infoMapping; // 这样写更语义化

    function sayHello(uint256 _id) public view returns (string memory) {
        // return stringVar;

        // for(uint256 i = 0; i < infos.length; i++) {
        //     if(infos[i].id == _id) {
        //         return  addInfo(infos[i].phrase);
        //     }
        // }
        // return addInfo(stringVar);

        if(infoMapping[_id].addr == address(0x0)) {
            return addInfo(stringVar);
        } else {
            return  addInfo(infoMapping[_id].phrase);
        }
    }

    function setHello(string memory newString, uint256 _id) public {
        // stringVar = newString;

        Info memory info = Info(newString, _id, msg.sender);
        // infos.push(info);
        
        infoMapping[_id] = info;
    }

    function addInfo(string memory helloString) internal pure returns (string memory) {
        return string.concat(helloString, " from xxx's contract.");
    }

}
