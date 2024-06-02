// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "hardhat/console.sol";

contract Contract {
    
	function getSecret(string memory _message) public returns(uint) {
		// TODO: find the secret number and return it! 
		console.log(_message);
		return 1337;
	}
}