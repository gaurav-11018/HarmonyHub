import React, { useEffect, useState } from "react";
import {
  MusicAssetContract,
  HarmonyTokenContract,
  CollaborationContract,
  LicensingContract,
} from "../contracts";

function MusicAssets() {
  const [musicAssets, setMusicAssets] = useState([]);

  useEffect(() => {
    async function fetchMusicAssets() {
      // Example of calling a contract function
      const totalSupply = await MusicAssetContract.totalSupply();
      const assets = [];

      for (let i = 1; i <= totalSupply; i++) {
        const owner = await MusicAssetContract.ownerOf(i);
        const tokenURI = await MusicAssetContract.tokenURI(i);
        assets.push({ id: i, owner, tokenURI });
      }

      setMusicAssets(assets);
    }

    fetchMusicAssets();
  }, []);

  return (
    <div>
      {/* Render music assets */}
      {musicAssets.map((asset) => (
        <div key={asset.id}>
          <p>ID: {asset.id}</p>
          <p>Owner: {asset.owner}</p>
          <p>Token URI: {asset.tokenURI}</p>
        </div>
      ))}
    </div>
  );
}

export default MusicAssets;
