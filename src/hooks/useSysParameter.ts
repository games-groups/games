import { useEventListener, useMount } from "ahooks";
import { useCallback } from "react";
import { useDispatch } from "umi";

export const useSysParameter = () => {
  const dispatch = useDispatch();

  const handleIsMobile = useCallback(() => {
    // const result = document.body.getBoundingClientRect().width - 1 < 992;
    let isMobile = false;
    if (
      navigator.userAgent.match(/Mobi/i) ||
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPhone/i)
    ) {
      isMobile = true;
    }

    dispatch({
      type: "common/update",
      payload: { isMobile },
    });
  }, [dispatch]);

  useEventListener("resize", handleIsMobile);

  useMount(handleIsMobile);
};
