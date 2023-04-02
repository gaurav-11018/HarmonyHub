// src/components/Marketplace.js
import React, { useEffect, useState } from "react";
import { MusicAssetContract } from "../contracts";

function Marketplace() {
  const [musicAssets, setMusicAssets] = useState([]);

  useEffect(() => {
    async function fetchMarketplaceAssets() {
      // Get the total supply of music assets
      const totalSupply = await MusicAssetContract.totalSupply();

      // Fetch the music assets that are for sale
      const assets = [];
      for (let i = 1; i <= totalSupply; i++) {
        const isForSale = await MusicAssetContract.isAssetForSale(i);
        if (isForSale) {
          const owner = await MusicAssetContract.ownerOf(i);
          const tokenURI = await MusicAssetContract.tokenURI(i);
          const price = await MusicAssetContract.assetPrice(i);
          assets.push({ id: i, owner, tokenURI, price });
        }
      }

      setMusicAssets(assets);
    }

    fetchMarketplaceAssets();
  }, []);

  return (
    <div>
      <h2>Marketplace</h2>
      <ul>
        {musicAssets.map((asset) => (
          <li key={asset.id}>
            ID: {asset.id}, Owner: {asset.owner}, Token URI: {asset.tokenURI},
            Price: {asset.price.toString()} HMY
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Marketplace;
