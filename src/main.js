import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueKonva from "vue-konva";
import Konva from "konva";
// import Client from "socket.io"
// var WebSocketClient = require("websocket").client;

Konva.showWarnings = false;
// Vue.use(WebSocketClient);
Vue.use(VueKonva);
Vue.use(Konva);
Vue.use(vuetify);
Vue.config.productionTip = false;
// Konva.autoDrawEnabled = true;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
