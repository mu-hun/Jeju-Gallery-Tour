import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import '@mdi/light-font/css/materialdesignicons-light.min.css'

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
