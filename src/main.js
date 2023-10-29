import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router/index";
import store from "./store";
import VueApexCharts from "vue3-apexcharts";

createApp(App)
  .use(store)
  .use(Antd)
  .use(VueApexCharts)
  .use(router)
  .mount("#app");
