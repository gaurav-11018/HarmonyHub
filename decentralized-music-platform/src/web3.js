import { ethers } from "ethers";

export function getWeb3Provider() {
  // Use MetaMask or another browser extension as the provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return provider;
}
