import { useRoutePlatform } from "@/hooks/useRoutePlatform";
import { useSysParameter } from "@/hooks/useSysParameter";
import { ConfigProvider } from "antd";
// import MobileLayout from './h5';
import WebLayout from "./web";

export default (props: any) => {
  // const defaultLoadingStyle: React.CSSProperties = {
  //   width: '200px',
  //   height: '35px',
  //   backgroundImage: `url(${loadingGif})`,
  //   backgroundSize: '100%',
  //   backgroundRepeat: 'no-repeat',
  // };
  // const { isMobile } = useInitialState();
  useSysParameter();
  useRoutePlatform();
  return (
    <ConfigProvider>
      <WebLayout {...props} />
    </ConfigProvider>
  );
  // return <ConfigProvider>{!isMobile ? <WebLayout {...props} /> : <MobileLayout {...props} />}</ConfigProvider>;
};
