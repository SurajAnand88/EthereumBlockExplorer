import { Alchemy, Network } from "alchemy-sdk";

export default function alchemy() {
  const setting = {
    apiKey: import.meta.env.VITE_API_KEY,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(setting);
  return alchemy;
}
