// src/components/Licenses.js
import React, { useEffect, useState } from "react";
import { LicensingContract } from "../contracts";

function Licenses() {
  const [licenses, setLicenses] = useState([]);

  useEffect(() => {
    async function fetchLicenses() {
      const totalLicenses = await LicensingContract.getLicenseCount();
      const licenseList = [];

      for (let i = 1; i <= totalLicenses; i++) {
        const license = await LicensingContract.getLicense(i);
        licenseList.push({ licenseId: i, ...license });
      }

      setLicenses(licenseList);
    }

    fetchLicenses();
  }, []);

  return (
    <div>
      <h2>Licenses</h2>
      <ul>
        {licenses.map((license) => (
          <li key={license.licenseId}>
            License ID: {license.licenseId}, Asset ID: {license.assetId},
            Licensee: {license.licensee}, Price: {license.price} HMY
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Licenses;
