import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DAppsNFTModule = buildModule("DAppsNFTModule", (m) => {
  const defaultAdmin = m.getParameter("admin", "");

  if (!defaultAdmin) {
    throw new Error("defaultAdmin is required");
  }

  const dappsNft = m.contract("DAppsNft", [defaultAdmin, defaultAdmin]);

  return { dappsNft };
});

export default DAppsNFTModule;

// npm run verify:holesky 0x1B41A542CA821B211d141540672a804A3e8e0B68 "0x34Ba6Ef2bC9769C765E8777562cD2F3eC9BB0901 0x34Ba6Ef2bC9769C765E8777562cD2F3eC9BB0901"