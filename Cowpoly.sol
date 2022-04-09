// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract Cowpoly is ERC721 {
    uint256 count = 0;
    uint256 maxSupply;

    constructor(uint256 _supply) ERC721("Cowpoly", "CPL") {
        maxSupply = _supply;
    }

    function makeCow(uint256 amount) public {
        require(count + amount <= maxSupply, "Exceeds max supply"); 
        for (uint256 i=0; i<amount; i++) {
            _safeMint(msg.sender, count);
            count++;
        }
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        return string(abi.encodePacked("https://raw.githubusercontent.com/eddiekaung/cowpolyNFT/main/metadata/", Strings.toString(tokenId), ".json"));
    }
}