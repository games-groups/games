/* 路由配置表的类型 */
type RouteConfig = {
  name?: string;
  exact?: boolean;
  title?: string;
  path?: string;
  component?: string;
  icon?: string;
  redirect?: string;
  routes?: RouteConfig[];
  hidden?: boolean;
};

interface Window {
  less: {
    modifyVars: (e: any) => void;
  };
  context: Web3ReactContextInterface<Web3Provider>;
  ga: (
    command: "send",
    hitType: "event" | "pageview",
    fieldsObject: GAFieldsObject | string
  ) => void;
  reloadAuthorized: () => void;
  _hmt: {
    push: (...params: any[]) => void;
  };
  baseHost: string;
  disabledEncrypt: boolean;
  __POWERED_BY_QIANKUN__: any;
}
declare const ROUTES: RouteConfig[];

declare module "slash2";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
declare module "*.js";
declare module "*.svg" {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>
  ): React.ReactElement;
  const url: string;
  export default url;
}
interface Window {
  less: {
    modifyVars: (e: any) => void;
  };
  _hmt: {
    push: (...params: any[]) => void;
  };
}
declare module "*.json";

declare const CHAIN_ID: string;
declare const API_SERVICE_HOST: string;
declare const NODE_1: string;
declare const NODE_2: string;
declare const NODE_3: string;
declare const NODE_PRODUCTION: string;
declare const GAME_LIST: { path: string; url: string; title: string }[];
