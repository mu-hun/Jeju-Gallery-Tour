import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import '@mdi/light-font/css/materialdesignicons-light.min.css'
import 'inter-ui/inter.css'
import 'spoqa-han-sans/css/SpoqaHanSans-kr.css'
import 'typeface-libre-franklin/index.css'

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
