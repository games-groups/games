import { GAS_PRICE_GWEI } from "@/utils/contractHelper";
import { useSelector } from "umi";

export function useGasPrice(): string {
  const { NODE_ENV } = process.env;

  const { gasPrice } = useSelector((state: any) => {
    return state.user.userInfo;
  });

  return NODE_ENV === "production" ? gasPrice : GAS_PRICE_GWEI.testnet;
}
