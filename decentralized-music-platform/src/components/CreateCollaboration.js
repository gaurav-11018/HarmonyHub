// src/components/CreateCollaboration.js
import React, { useState } from "react";
import { CollaborationContract } from "../contracts";

function CreateCollaboration() {
  const [assetId, setAssetId] = useState("");
  const [collaborator, setCollaborator] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await CollaborationContract.createCollaboration(
        assetId,
        collaborator,
        percentage
      );
      alert("Collaboration created successfully!");
    } catch (error) {
      alert("Error creating collaboration:", error.message);
    }
  };

  return (
    <div>
      <h2>Create Collaboration</h2>
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
          Collaborator:
          <input
            type="text"
            value={collaborator}
            onChange={(e) => setCollaborator(e.target.value)}
          />
        </label>
        <br />
        <label>
          Percentage:
          <input
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Collaboration</button>
      </form>
    </div>
  );
}

export default CreateCollaboration;
