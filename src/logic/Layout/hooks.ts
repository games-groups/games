import { injected } from "@/web3";
import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect } from "react";
import { history, useLocation } from "umi";
import { navList } from "./config";

export const useHeader = () => {
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  const { pathname } = useLocation();

  const connectWallet = useCallback(async () => {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  }, [activate]);

  useEffect(() => {
    connectWallet();
  }, [connectWallet]);

  const handleClick = (basePre: "/h5" | "/web") => {
    return (item: typeof navList[number]) => {
      const { NODE_ENV } = process.env;
      if (item.disabled && NODE_ENV === "production") return;

      if (item.basePath === "/Resource") {
        // Jump to the introduction page for Resource （temporary）
        history.push(`${basePre}/Resource/Introduction`);
        return;
      }
      history.push(`${basePre}${item.basePath}`);
    };
  };

  return {
    handleClick,
    connectWallet,
    pathname,
    isConnect: active,
    account,
    navList,
  };
};

export const useFooter = () => {
  const toTelegram = () => {
    window.open("https://t.me/ChatVerseofficial");
  };

  const toTwitter = () => {
    window.open("https://twitter.com/Chat_Verse");
  };

  const toDiscord = () => {
    window.open("https://discord.gg/cnhSD2a349");
  };

  const toReddit = () => {
    window.open("https://www.reddit.com/user/ChatVerse");
  };

  const toMedium = () => {
    window.open("https://medium.com/@chatverse");
  };

  return {
    toTelegram,
    toTwitter,
    toDiscord,
    toReddit,
    toMedium,
  };
};
