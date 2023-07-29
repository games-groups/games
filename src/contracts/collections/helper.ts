import testContracts from "./contracts.dev";
import proContracts from "./contracts.pro";

const contractMap = {
  56: proContracts,
  97: testContracts,
};

export const contractAddress = contractMap[CHAIN_ID] ?? proContracts; // default export main network contract address
