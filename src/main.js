import Vue from 'vue';
import App from './App.vue';
import router from './router';
import filter from './filters';

import './assets/styles/styles.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  filter,
  render: h => h(App)
}).$mount('#app');
