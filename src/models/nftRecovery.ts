import type { ImmerReducer } from "umi";

export interface IndexModelState {
  selectedList: any[];
}

export interface IndexModelType {
  namespace: "nftRecovery";
  state: IndexModelState;
  reducers: {
    update: ImmerReducer<IndexModelState>;
  };
}

const IndexModel: IndexModelType = {
  namespace: "nftRecovery",
  state: {
    selectedList: [],
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
