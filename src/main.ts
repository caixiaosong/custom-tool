import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores/store';
import iview from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iview); // 使用所有iview组件
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  // mounted() {
  //   // Prevent blank screen in Electron builds
  //   this.$router.push('/')
  // }
}).$mount('#app');
