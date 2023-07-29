import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useRef } from "react";
// import { gameList } from './config';

const iframeStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  border: "none",
  borderRadius: "5px",
};

export default () => {
  const context = useWeb3React<Web3Provider>();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const iframeUrl = GAME_LIST?.find(
    (item) => item.path === location.pathname
  )?.url;
  //   const { connector, library, chainId, account, activate, deactivate, active, error } = context;

  //   useEffect(() => {
  //     if (!iframeUrl) return;
  //     const frames = iframeRef.current?.contentWindow;
  //     frames?.postMessage(
  //       {
  //         context: {
  //         //   connector,
  //         //   library,
  //           chainId,
  //           account,
  //           active,
  //         //   error,
  //         },
  //       },
  //       iframeUrl,
  //     );
  //   }, [account, active, chainId, connector, error, iframeRef, iframeUrl, library]);

  window.context = context;

  return (
    <iframe
      // title={props?.route?.title}
      style={iframeStyle}
      ref={iframeRef}
      src={iframeUrl}
    />
  );
};
