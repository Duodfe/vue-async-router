import Vue from "vue";
import Vuex from "vuex";
import { getToken, setToken, removeToken } from "@/utils/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => { 
      state.token = token
    }
  },
  actions: {
    // 用户登录
    LoginByUserName({ commit }, userInfo) { 
      return new Promise((resolve, reject) => {

        setTimeout(function () { // 模拟请求
          const data = {
            token: 'test_token'
          };
          commit('SET_TOKEN', data.token);
          setToken(data.token);
          resolve();
        }, 2000)

      })
    }
  }
});
