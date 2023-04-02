// src/components/Collaborations.js
import React, { useEffect, useState } from "react";
import { CollaborationContract } from "../contracts";

function Collaborations() {
  const [collaborations, setCollaborations] = useState([]);

  useEffect(() => {
    async function fetchCollaborations() {
      // Get the total number of collaborations
      const totalCollaborations =
        await CollaborationContract.totalCollaborations();

      // Fetch the collaborations
      const collaborationsList = [];
      for (let i = 1; i <= totalCollaborations; i++) {
        const collaboration = await CollaborationContract.collaborations(i);
        collaborationsList.push({
          id: i,
          assetId: collaboration.assetId,
          collaborator: collaboration.collaborator,
          percentage: collaboration.percentage,
        });
      }

      setCollaborations(collaborationsList);
    }

    fetchCollaborations();
  }, []);

  return (
    <div>
      <h2>Collaborations</h2>
      <ul>
        {collaborations.map((collab) => (
          <li key={collab.id}>
            ID: {collab.id}, Asset ID: {collab.assetId}, Collaborator:{" "}
            {collab.collaborator}, Percentage: {collab.percentage}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Collaborations;
