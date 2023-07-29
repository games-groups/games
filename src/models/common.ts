import type { ImmerReducer } from "umi";

export interface IndexModelState {
  isMobile: boolean;
}

export interface IndexModelType {
  namespace: "common";
  state: IndexModelState;
  reducers: {
    update: ImmerReducer<IndexModelState>;
  };
}

const IndexModel: IndexModelType = {
  namespace: "common",
  state: {
    isMobile: false,
  },

  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default IndexModel;
