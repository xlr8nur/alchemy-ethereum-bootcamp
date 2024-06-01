// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract MultiSig {
    address[] public owners;
    uint256 public required;

    constructor(address[] memory _owners, uint256 _required ){
        uint256 ownersLength = _owners.length;
        
        require(ownersLength > 0, "number of owners cannot be zero");
        require(_required > 0, "_required cannot be zero");
        require(_required < ownersLength, "required cannot be more than the total of owners");
        
        required = _required;
        owners = _owners;
    }
}