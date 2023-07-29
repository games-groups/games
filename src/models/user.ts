import { GAS_PRICE_GWEI } from "@/utils/contractHelper";
import type { ImmerReducer } from "umi";

export interface IndexModelState {
  userInfo: {
    gasPrice: string;
  };
}

export interface IndexModelType {
  namespace: "user";
  state: IndexModelState;
  // effects: {
  //   getInfo: Effect;
  // };
  reducers: {
    udpateUserInfo: ImmerReducer<IndexModelState>;
  };
}

const IndexModel: IndexModelType = {
  namespace: "user",

  state: {
    userInfo: {
      gasPrice: GAS_PRICE_GWEI.fast,
    },
  },

  // effects: {
  //   *getInfo ({payload}, {call, put}) {
  //     call('调接口的方法', '调接口的入参')
  //     const userinfo = yield call(fetchUser, {...payload})
  //     拿到后端数据后，通过reducers方法，更新到state上
  //     put({type:'reducer方法名', payload:'数据'}) 相当于dispatch
  //     yield put({type:'udpateUserInfo', payload:userinfo})
  //   }
  // },
  reducers: {
    udpateUserInfo(state, { payload }) {
      state.userInfo = payload;
    },
  },
};

export default IndexModel;
