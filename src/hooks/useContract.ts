import BabyAbi from "@/contracts/abi/Baby.json";
import ChatMintAbi from "@/contracts/abi/ChatMint.json";
import ChatNFTAbi from "@/contracts/abi/ChatNFT.json";
import ChatRecycleAbi from "@/contracts/abi/ChatRecycle.json";
import IDOAbi from "@/contracts/abi/IDO.json";
import { contractAddress } from "@/contracts/collections/helper";
import { getContract } from "@/utils/contractHelper";
import { useMemo } from "react";
import useActiveWeb3React from "./useActiveWeb3React";

export const useChatNftContract = () => {
  const { library } = useActiveWeb3React();
  const chatNftContract = useMemo(
    () =>
      getContract(ChatNFTAbi, contractAddress.ChatNFT, library?.getSigner()),
    [library]
  );
  return chatNftContract;
};

export const useChatMintContract = () => {
  const { library } = useActiveWeb3React();
  const chatMintContract = useMemo(
    () =>
      getContract(ChatMintAbi, contractAddress.ChatMint, library?.getSigner()),
    [library]
  );
  return chatMintContract;
};

export const useChatRecycleContract = () => {
  const { library } = useActiveWeb3React();
  const chatRecycleAbiContract = useMemo(
    () =>
      getContract(
        ChatRecycleAbi,
        contractAddress.ChatRecycle,
        library?.getSigner()
      ),
    [library]
  );
  return chatRecycleAbiContract;
};

export const useIDOContract = () => {
  const { library } = useActiveWeb3React();
  const contract = useMemo(
    () => getContract(IDOAbi, contractAddress.IDO, library?.getSigner()),
    [library]
  );
  return contract;
};

export const useCTVContract = () => {
  const { library } = useActiveWeb3React();
  const contract = useMemo(
    () => getContract(BabyAbi, contractAddress.CTV, library?.getSigner()),
    [library]
  );
  return contract;
};

export const useUSDTContract = () => {
  const { library } = useActiveWeb3React();
  const contract = useMemo(
    () => getContract(BabyAbi, contractAddress.USDT, library?.getSigner()),
    [library]
  );
  return contract;
};
