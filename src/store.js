import Vue from 'vue';
import Vuex from 'vuex';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { Login } from '@/api/login';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    // 用户登录
    LoginByUserName({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        Login(userInfo)
          .then(res => {
            commit('SET_TOKEN', res.result.skey);
            setToken(res.result.skey);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
  getters: {
    token: state => state.token
  }
});
