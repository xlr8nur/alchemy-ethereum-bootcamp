// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract Token {
    uint256 public totalSupply;
    string public name = "My Token";
    string public symbol = "MTK";
    uint8 public decimals = 18;

    mapping(address => uint256) public balanceOf;
}