// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MusicAssets from "./components/MusicAssets";
import CreateMusicAsset from "./components/CreateMusicAsset";
import MyMusicAssets from "./components/MyMusicAssets";
import Marketplace from "./components/Marketplace";
import Collaborations from "./components/Collaborations";
import CreateCollaboration from "./components/CreateCollaboration";
import Licenses from "./components/Licenses";
import CreateLicense from "./components/CreateLicense";
import MyLicenses from "./components/MyLicenses";
import UserWallet from "./components/UserWallet";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Music Assets</Link>
            </li>
            <li>
              <Link to="/create-music-asset">Create Music Asset</Link>
            </li>
            <li>
              <Link to="/my-music-assets">My Music Assets</Link>
            </li>
            <li>
              <Link to="/marketplace">Marketplace</Link>
            </li>
            <li>
              <Link to="/collaborations">Collaborations</Link>
            </li>
            <li>
              <Link to="/create-collaboration">Create Collaboration</Link>
            </li>
            <li>
              <Link to="/licenses">Licenses</Link>
            </li>
            <li>
              <Link to="/create-license">Create License</Link>
            </li>
            <li>
              <Link to="/my-licenses">My Licenses</Link>
            </li>
            <li>
              <Link to="/user-wallet">User Wallet</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={MusicAssets} />
          <Route path="/create-music-asset" component={CreateMusicAsset} />
          <Route path="/my-music-assets" component={MyMusicAssets} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/collaborations" component={Collaborations} />
          <Route path="/create-collaboration" component={CreateCollaboration} />
          <Route path="/licenses" component={Licenses} />
          <Route path="/create-license" component={CreateLicense} />
          <Route path="/my-licenses" component={MyLicenses} />
          <Route path="/user-wallet" component={UserWallet} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
