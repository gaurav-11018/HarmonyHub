// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HarmonyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("HarmonyToken", "HMY") {
        _mint(msg.sender, initialSupply);
    }
}
//This is a ERC20 token contract for platform transactions, such as payments, rewards, and staking. You can use OpenZeppelin's ERC20 implementation as a starting point.
//0x65d87942e42527117a1e5BCD56A5A154560B1c06
