import { useSelector } from "umi";

export const useInitialState = () => {
  const isMobile = useSelector((store: any) => store.common.isMobile);

  return {
    isMobile,
  };
};
