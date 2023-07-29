// import h5Routes from "./h5";
import webRoutes from "./web";

const routes: RouteConfig[] = [
  { exact: true, path: "/", redirect: "/game1" },
  // ...h5Routes,
  ...webRoutes,

  {
    title: "content",
    component: "@/layouts",
    routes: [
      // TODO 后续合并成一个
      {
        name: "GAME1",
        title: "GAME1",
        path: "/game1",
        component: "@/pages/Iframe",
      },
      {
        name: "GAME2",
        title: "GAME2",
        path: "/game2",
        component: "@/pages/Iframe",
      },
    ],
  },
];

export default routes;
