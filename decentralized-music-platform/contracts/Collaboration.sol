//This contract manages collaboration workspaces, storing music files' IPFS hashes, and handling access control for collaborators.

//0xcDfBFD88DC3d76a2ecD571f1cbeE248975318BA4

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract Collaboration is AccessControl {
    bytes32 public constant COLLABORATOR_ROLE = keccak256("COLLABORATOR_ROLE");

    uint256 private _workspaceIdCounter;
    mapping(uint256 => string) private _workspaces;
    mapping(uint256 => uint256) private _musicAssetId;

    event WorkspaceCreated(
        uint256 workspaceId,
        uint256 musicAssetId,
        address creator
    );

    function createWorkspace(
        uint256 musicAssetId,
        string memory ipfsHash
    ) public {
        _workspaceIdCounter++;
        _musicAssetId[_workspaceIdCounter] = musicAssetId;
        _workspaces[_workspaceIdCounter] = ipfsHash;
        _setupRole(COLLABORATOR_ROLE, msg.sender);
        emit WorkspaceCreated(_workspaceIdCounter, musicAssetId, msg.sender);
    }

    function updateWorkspace(
        uint256 workspaceId,
        string memory ipfsHash
    ) public {
        require(
            hasRole(COLLABORATOR_ROLE, msg.sender),
            "Caller is not a collaborator"
        );
        _workspaces[workspaceId] = ipfsHash;
    }

    function getWorkspace(
        uint256 workspaceId
    ) public view returns (string memory) {
        require(
            hasRole(COLLABORATOR_ROLE, msg.sender),
            "Caller is not a collaborator"
        );
        return _workspaces[workspaceId];
    }

    function addCollaborator(uint256 workspaceId, address collaborator) public {
        require(
            hasRole(COLLABORATOR_ROLE, msg.sender),
            "Caller is not a collaborator"
        );
        _setupRole(COLLABORATOR_ROLE, collaborator);
    }
}
