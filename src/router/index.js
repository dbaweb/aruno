import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/project",
    name: "project",
    component: () => import("../views/Project.vue")
  },
  {
    path: "/skill",
    name: "skill",
    component: () => import("../views/Skill.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  linkActiveClass: "is-active"
});

export default router;
