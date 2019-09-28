import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';


Vue.use(Vuex);

export default new Vuex.Store({
  // 导入子模块
  modules: {
    user
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

