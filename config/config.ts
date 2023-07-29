import { defineConfig } from "umi";
import routes from "./routes";

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === "development";

// https://v3.umijs.org/zh-CN/config
export default defineConfig({
  title: "games",
  publicPath: `./`,
  scripts: [{ src: "./gamesConfig.js" }],
  manifest: {},
  define: {
    ROUTES: routes,
  },
  metas: [
    {
      httpEquiv: "Cache-Control",
      content: "no-cache",
    },
    {
      httpEquiv: "Pragma",
      content: "no-cache",
    },
    {
      httpEquiv: "Expires",
      content: "0",
    },
  ],
  // links: [{ rel: 'icon', href: '/logo.png' }],
  hash: true,
  dva: { hmr: false, immer: true },
  routes,
  ignoreMomentLocale: true,
  devtool: false,
  nodeModulesTransform: {
    type: isDev ? "none" : "all",
    exclude: [],
  },
  // chunks: isDev ? ['umi'] : ['vendors', 'umi'],
  // chainWebpack(config: any) {
  //   config.merge({
  //     optimization: isDev
  //       ? {}
  //       : {
  //           minimize: true,
  //           splitChunks: {
  //             chunks: 'all',
  //             minSize: 30000,
  //             minChunks: 1,
  //             automaticNameDelimiter: '.',
  //             cacheGroups: {
  //               vendor: {
  //                 name: 'vendors',
  //                 test({ resource }: any) {
  //                   return /[\\/]node_modules[\\/]/.test(resource);
  //                 },
  //                 priority: 10,
  //               },
  //             },
  //           },
  //         },
  //   });
  // },
  terserOptions: {
    compress: {
      drop_console: true,
    },
  },
  dynamicImport: {},
  mfsu: {},
  antd: {},
});
