import Vue from 'vue'
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue"; //relative dependies


Vue.use(BootstrapVue);//for js portion of bootstrap
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
