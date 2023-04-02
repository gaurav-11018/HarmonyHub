// src/components/UserWallet.js
import React, { useEffect, useState } from "react";
import { HarmonyTokenContract } from "../contracts";

function UserWallet() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchBalance() {
      const userBalance =
        await HarmonyTokenContract.balanceOf(/* User's address */);
      setBalance(userBalance);
    }

    fetchBalance();
  }, []);

  return (
    <div>
      <h2>User Wallet</h2>
      <p>Balance: {balance} HMY</p>
    </div>
  );
}

export default UserWallet;
