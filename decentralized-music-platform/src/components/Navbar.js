// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create-music-asset">Create Music Asset</NavLink>
        </li>
        <li>
          <NavLink to="/my-music-assets">My Music Assets</NavLink>
        </li>
        <li>
          <NavLink to="/marketplace">Marketplace</NavLink>
        </li>
        <li>
          <NavLink to="/collaborations">Collaborations</NavLink>
        </li>
        <li>
          <NavLink to="/create-collaboration">Create Collaboration</NavLink>
        </li>
        <li>
          <NavLink to="/licenses">Licenses</NavLink>
        </li>
        <li>
          <NavLink to="/create-license">Create License</NavLink>
        </li>
        <li>
          <NavLink to="/my-licenses">My Licenses</NavLink>
        </li>
        <li>
          <NavLink to="/user-wallet">User Wallet</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
