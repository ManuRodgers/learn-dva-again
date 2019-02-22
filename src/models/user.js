import { delay } from "dva/saga";
import axios from "axios";
export default {
  namespace: "user",
  state: {
    error: null,
    user: null
  },
  reducers: {
    fetchStart(state, {}) {
      return { ...state, error: null, user: null };
    },
    fetchSuccess(state, { user }) {
      return { ...state, error: null, user };
    },
    fetchError(state, { error }) {
      return { ...state, user: null, error };
    }
  },
  effects: {
    *fetch({}, { call, put }) {
      yield put({ type: "fetchStart" });
      try {
        const { data, status } = yield call(axios, {
          method: "get",
          url: "http://jsonplaceholder.typicode.com/users?id=1"
        });
        if (status === 200) {
          yield console.log(data);
          yield put({ type: "fetchSuccess", user: data[0] });
        }
      } catch (error) {
        console.error(error);
        yield put({ type: "fetchError", error: error.message });
      }
    }
  },
  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(location => {
        // console.log(window.g_app._store.getState());
      });
    }
  }
};
