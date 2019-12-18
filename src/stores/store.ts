import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import login from './modules/login';


Vue.use(Vuex);

const store = new Vuex.Store(
  {
    // 开启严格模式。
    // 无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到.
    // v-model改成mutation的触发方法：https://vuex.vuejs.org/zh/guide/forms.html
    strict: process.env.NODE_ENV !== 'production',
    // 自定义插件，详情参照https://vuex.vuejs.org/zh/guide/plugins.html
    plugins: [],
    // 导入子模块
    modules: {
      user,
      login
    },
    // 成员变量设置
    state: {

    },
    // 外部可以获取得到的配置
    getters: {

    },
    // 同步方法配置
    mutations: {

    },
    // 异步方法配置
    actions: {

    }
  }
);
export default store;

