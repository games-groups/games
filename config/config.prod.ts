export default {
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
    CHAIN_ID: "56",
    API_SERVICE_HOST: "http://localhost:8081",

    // # 10+ nodes balanced, US/EU
    NODE_1: "https://bsc-dataseed1.ninicoin.io",

    // # 10+ nodes balanced, US/EU
    NODE_2: "https://bsc-dataseed1.defibit.io",

    // # 10+ nodes balanced in each region, global
    NODE_3: "https://bsc-dataseed.binance.io",

    NODE_PRODUCTION: "https://bsc-dataseed.binance.org",
  },
};
