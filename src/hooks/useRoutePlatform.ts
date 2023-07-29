import { useDebounceEffect } from "ahooks";
import { useMemo } from "react";
import { useLocation } from "umi";
import { useInitialState } from "./useInitialState";

export const useRoutePlatform = () => {
  const location = useLocation();
  const { isMobile } = useInitialState();
  const isMobileRoute = useMemo(() => {
    return location.pathname.startsWith("/h5");
  }, [location]);

  useDebounceEffect(
    () => {
      let pathName = location.pathname;

      if (isMobile && !isMobileRoute) {
        pathName = pathName.replace("/pc", "/h5");
        window.location.replace(pathName);
        console.log("change h5");
      }

      if (!isMobile && isMobileRoute) {
        pathName = pathName.replace("/h5", "/pc");
        window.location.replace(pathName);
        console.log("change web");
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [isMobile],
    {
      wait: 500,
    }
  );
};
