import type { ImmerReducer } from "umi";

export interface IndexModelState {
  loading: boolean;
  isApproved: boolean;
}

export interface IndexModelType {
  namespace: "mintNft";
  state: IndexModelState;
  reducers: {
    update: ImmerReducer<IndexModelState>;
    reset: ImmerReducer<IndexModelState>;
  };
}

const IndexModel: IndexModelType = {
  namespace: "mintNft",
  state: {
    isApproved: false,
    loading: false,
  },

  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    reset() {
      return {
        isApproved: false,
        loading: false,
      };
    },
  },
};

export default IndexModel;
