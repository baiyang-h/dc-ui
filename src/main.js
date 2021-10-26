import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import JwUI from './index';
import './index.scss';
Vue.use(JwUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
