import { createRouter, createWebHistory } from "vue-router";
import analyticsPage from "../components/analytics-page/analytics-page.vue";
import monitoringPage from "../components/analytics-page/monitoring-page.vue";
import uploadPage from "../components/upload-page/upload-page.vue";
import mainPage from "../components/main-page/main-page";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: mainPage,
  },
  {
    path: "/analytics",
    name: "analyticsPage",
    component: analyticsPage,
  },
  {
    path: "/monitoring",
    name: "monitoringPage",
    component: monitoringPage,
  },
  {
    path: "/upload",
    name: "uploadPage",
    component: uploadPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
