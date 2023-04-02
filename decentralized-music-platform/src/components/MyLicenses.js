// src/components/MyLicenses.js
import React, { useEffect, useState } from "react";
import { LicensingContract } from "../contracts";

function MyLicenses() {
  const [myLicenses, setMyLicenses] = useState([]);

  useEffect(() => {
    async function fetchMyLicenses() {
      const myLicensesList = await LicensingContract.getMyLicenses();
      setMyLicenses(myLicensesList);
    }

    fetchMyLicenses();
  }, []);

  return (
    <div>
      <h2>My Licenses</h2>
      <ul>
        {myLicenses.map((license, index) => (
          <li key={index}>
            License ID: {license.licenseId}, Asset ID: {license.assetId}, Price:{" "}
            {license.price} HMY
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyLicenses;
