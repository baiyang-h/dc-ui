import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import DcUI from './index';
import './index.scss';
Vue.use(DcUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
