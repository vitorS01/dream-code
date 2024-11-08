import { RouteRecordRaw } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import TabListLayout from "../layouts/TabListLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", component: () => import("../views/LandingPage.vue") },
      { path: "about-us", component: () => import("../views/AboutUs.vue") },
      { path: "contact", component: () => import("../views/Contact.vue") },
      { path: "guide", component: () => import("../views/Guide.vue") },
      { path: "login", component: () => import("../views/login/Login.vue") },
      { path: "sign-up", component: () => import("../views/login/SignUp.vue") },
    ],
  },
  {
    path: "/",
    component: TabListLayout,
    children: [
      {
        path: "dashboard",
        component: () => import("../views/tablist/Dashboard.vue"),
      },
      {
        path: "problems",
        component: () => import("../views/tablist/Problems.vue"),
      },
      {
        path: "problems/generate",
        component: () => import("../views/tablist/Generate.vue"),
      },
      {
        path: "contests",
        component: () => import("../views/tablist/Contests.vue"),
      },
    ],
  },
];

export default routes;
