import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "./styles/main.scss";
import { routes } from "./routes";
import Auth from "./components/Auth";
import Login from "./pages/Login";
import App from "./App";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({ routes });

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
