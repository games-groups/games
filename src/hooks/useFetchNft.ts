import ChatNFTAbi from "@/contracts/abi/ChatNFT.json";
import { multicallv2 } from "@/utils/multicall";
import { useCallback } from "react";
import { useChatNftContract } from "./useContract";

export const useFetchNft = () => {
  const chatNftContract = useChatNftContract();

  const getNftsData = useCallback(
    async (nftIds: string[]) => {
      const metadataCalls = nftIds.map((tokenID: string) => {
        return {
          address: chatNftContract.address,
          name: "metadata",
          params: [tokenID.toString()],
        };
      });

      const nftDataInBlock = await multicallv2(ChatNFTAbi, metadataCalls);
      return nftDataInBlock;
    },
    [chatNftContract.address]
  );

  return getNftsData;
};
