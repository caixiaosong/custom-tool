import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores/store';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


Vue.use(ViewUI); // 使用所有iview组件
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

