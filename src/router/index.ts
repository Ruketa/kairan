import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "@/view/pages/Login.vue";
import Main from "@/view/pages/Main.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
