import type { RequestConfig } from "umi";

// import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from "@web3-react/core";

import { getLibrary } from "@/utils/web3React";

const codeMessage = {
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "禁止访问。",
  404: "资源不存在。",
  405: "请求方法不被允许。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

type ICode = keyof typeof codeMessage;

export const request: RequestConfig = {
  headers: {
    "Cache-Control": "no-store",
    Pragma: "no-store",
  },
  validateCache: () => false,

  responseInterceptors: [
    (response: any) => {
      const { ok, status } = response;
      if (ok && status === 200) {
        return response;
      }
      const error = Error(`${status} ${codeMessage[status as ICode]}`);
      error.name = "HttpError";
      throw error;
    },
  ],
  errorConfig: {
    // adaptor: (res: any) => {
    //     return {
    //       // success: res?.retCode === 'T200',
    //       data: res?.data,
    //       errorCode: res?.retCode,
    //       errorMessage: res?.retMsg,
    //     };
    //   },
  },
  errorHandler: (error: any) => {
    console.error("error-network", error);
    //   if (error.name === 'HttpError') {
    //     notification.error({
    //       key: 'error',
    //       message: error.message,
    //     });
    //   } else {
    //     notification.error({
    //       key: 'error',
    //       message: error.message,
    //     });
    //   }
    throw error;
  },
};

// export const onRouteChange = (params: any) => {
//     console.log("params", params);
// };

// connect bloch-chain account
export function rootContainer(container: any) {
  return (
    // <Web3ReactProvider getLibrary={(provider: any) => new Web3(provider)}>
    <Web3ReactProvider getLibrary={getLibrary}>{container}</Web3ReactProvider>
  );
}
