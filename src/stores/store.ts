import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import login from './modules/login';


Vue.use(Vuex);

const store = new Vuex.Store({
  // 导入子模块
  modules: {
    user,
    login
  },
  // 成员变量设置
  state: {

  },
  // 同步方法配置
  mutations: {

  },
  // 异步方法配置
  actions: {

  }
});

export default store;

