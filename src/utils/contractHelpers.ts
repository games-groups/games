import MultiCallAbi from "@/contracts/abi/Multicall.json";
import { contractAddress } from "@/contracts/collections/helper";
import { simpleRpcProvider } from "@/utils/providers";
import { ethers } from "ethers";

const getContract = (
  abi: any,
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getMulticallContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(MultiCallAbi, contractAddress.MultiCall, signer);
};
