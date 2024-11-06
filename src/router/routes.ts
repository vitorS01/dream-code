import { RouteRecordRaw } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", component: () => import("../views/Home.vue") },
      { path: "problemset", component: () => import("../views/Problems.vue") },
      { path: "contests", component: () => import("../views/Contests.vue") },
      { path: "olympiads", component: () => import("../views/Olympiads.vue") },
      { path: "about-us", component: () => import("../views/AboutUs.vue") },
      { path: "login", component: () => import("../views/login/Login.vue") },
      { path: "sign-up", component: () => import("../views/login/SignUp.vue") },
    ],
  },
];

export default routes;
