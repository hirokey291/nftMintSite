import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "@nomicfoundation/hardhat-verify";

const { PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

if (!PRIVATE_KEY) {
  throw new Error("PRIVATE_KEY is not set");
}

if (!ETHERSCAN_API_KEY) {
  throw new Error("ETHERSCAN_API_KEY is not set");
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      evmVersion: "cancun"
    }
  },
  networks: {
    sepolia: {
      url: "https://sepolia.drpc.org",
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
