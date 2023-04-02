// src/components/CreateMusicAsset.js
import React, { useState } from "react";
import { MusicAssetContract, HarmonyTokenContract } from "../contracts";

function CreateMusicAsset() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [royalty, setRoyalty] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Call the contract's mint function
    try {
      await MusicAssetContract.mint(
        name,
        description,
        imageURL,
        royalty,
        price
      );
      alert("Successfully created music asset!");
    } catch (error) {
      console.error(error);
      alert("Failed to create music asset");
    }
  };

  return (
    <div>
      <h2>Create Music Asset</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="url"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            required
          />
        </label>
        <label>
          Royalty:
          <input
            type="number"
            step="0.01"
            value={royalty}
            onChange={(e) => setRoyalty(e.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateMusicAsset;
