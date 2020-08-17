import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import LoggedView from "./components/LoggedView";
import "./styles/main.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  el: "#app",
  render: h => h(LoggedView)
});
