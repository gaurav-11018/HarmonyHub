// src/components/MyMusicAssets.js
import React, { useEffect, useState } from "react";
import { MusicAssetContract } from "../contracts";

function MyMusicAssets() {
  const [musicAssets, setMusicAssets] = useState([]);

  useEffect(() => {
    async function fetchMyMusicAssets() {
      // Get the current user's address
      const userAddress = await MusicAssetContract.signer.getAddress();

      // Get the total supply of music assets
      const totalSupply = await MusicAssetContract.totalSupply();

      // Fetch the user's music assets
      const assets = [];
      for (let i = 1; i <= totalSupply; i++) {
        const owner = await MusicAssetContract.ownerOf(i);
        if (owner === userAddress) {
          const tokenURI = await MusicAssetContract.tokenURI(i);
          assets.push({ id: i, owner, tokenURI });
        }
      }

      setMusicAssets(assets);
    }

    fetchMyMusicAssets();
  }, []);

  return (
    <div>
      <h2>My Music Assets</h2>
      <ul>
        {musicAssets.map((asset) => (
          <li key={asset.id}>
            ID: {asset.id}, Owner: {asset.owner}, Token URI: {asset.tokenURI}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyMusicAssets;
