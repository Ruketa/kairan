import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "@/Frontend/view/pages/Login.vue";
import Main from "@/Frontend/view/pages/Main.vue";
import store from "../store";

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
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthed = true;// store.state.isAuthorized;
  console.log("auth state ", isAuthed);
  if (to.name !== "Login" && !isAuthed) next({ path: "/", name: "Login" });
  else next();
});

export default router;
