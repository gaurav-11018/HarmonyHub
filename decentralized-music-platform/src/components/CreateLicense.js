// src/components/CreateLicense.js
import React, { useState } from "react";
import { LicensingContract } from "../contracts";

function CreateLicense() {
  const [assetId, setAssetId] = useState("");
  const [licensee, setLicensee] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await LicensingContract.createLicense(assetId, licensee, price);
      alert("License created successfully!");
    } catch (error) {
      alert("Error creating license:", error.message);
    }
  };

  return (
    <div>
      <h2>Create License</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Asset ID:
          <input
            type="number"
            value={assetId}
            onChange={(e) => setAssetId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Licensee:
          <input
            type="text"
            value={licensee}
            onChange={(e) => setLicensee(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price (in HMY):
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create License</button>
      </form>
    </div>
  );
}

export default CreateLicense;
