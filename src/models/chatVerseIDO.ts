import type { ImmerReducer } from "umi";

export interface IndexModelState {
  loading: boolean;
  isApproved: boolean;
  claimLoading: boolean;
}

export interface IndexModelType {
  namespace: "chatVerseIDO";
  state: IndexModelState;
  reducers: {
    update: ImmerReducer<IndexModelState>;
    reset: ImmerReducer<IndexModelState>;
  };
}

const IndexModel: IndexModelType = {
  namespace: "chatVerseIDO",
  state: {
    isApproved: false,
    loading: false,
    claimLoading: false,
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
        claimLoading: false,
      };
    },
  },
};

export default IndexModel;
