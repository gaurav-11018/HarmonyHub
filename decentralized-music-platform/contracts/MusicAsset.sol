//0xc28A5d21840dEeF6eC9719E2399C6415a3cBc81f

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MusicAsset is ERC721, Ownable {
    uint256 private _tokenIdCounter;

    constructor() ERC721("MusicAsset", "MAS") {}

    function mintMusicAsset(
        address to,
        string memory tokenURI
    ) public onlyOwner {
        _tokenIdCounter++;
        _safeMint(to, _tokenIdCounter);
        _setTokenURI(_tokenIdCounter, tokenURI);
    }
}
