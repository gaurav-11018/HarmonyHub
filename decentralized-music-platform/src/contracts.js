import { ethers } from "ethers";
import { getWeb3Provider } from "./web3";
import {
  MusicAssetABI,
  HarmonyTokenABI,
  CollaborationABI,
  LicensingABI,
} from "./abis";

const provider = getWeb3Provider();

const MusicAssetAddress = "0xc28A5d21840dEeF6eC9719E2399C6415a3cBc81f";
const HarmonyTokenAddress = "0x65d87942e42527117a1e5BCD56A5A154560B1c06";
const CollaborationAddress = "0xcDfBFD88DC3d76a2ecD571f1cbeE248975318BA4";
const LicensingAddress = "0x5A526A4517c3b3a153AD1461A01efc7c14E9E165";

export const MusicAssetContract = new ethers.Contract(
  MusicAssetAddress,
  MusicAssetABI,
  provider
);
export const HarmonyTokenContract = new ethers.Contract(
  HarmonyTokenAddress,
  HarmonyTokenABI,
  provider
);
export const CollaborationContract = new ethers.Contract(
  CollaborationAddress,
  CollaborationABI,
  provider
);
export const LicensingContract = new ethers.Contract(
  LicensingAddress,
  LicensingABI,
  provider
);
