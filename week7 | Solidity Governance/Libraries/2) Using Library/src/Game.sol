// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./UIntFunctions.sol";

contract Game {
    using UIntFunctions for uint;

    uint public participants;
    bool public allowTeams;

    constructor(uint256 _numParticipants){
        participants = _numParticipants;

        allowTeams = _numParticipants.isEven();
    }
}