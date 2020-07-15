import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './styles/element-variables.scss'

import '@/styles/index.scss' // global css


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')