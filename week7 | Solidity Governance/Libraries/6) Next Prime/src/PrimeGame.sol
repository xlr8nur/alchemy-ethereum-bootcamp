// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./Prime.sol";

contract PrimeGame {
    using Prime for uint256;

    function isWinner() external view returns (bool){
        return block.number.isPrime();
    }
}