import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Project from "@/views/Project.vue";
import Skill from "@/views/Skill.vue";
import Contact from "@/views/About.vue";

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
    component: Project
  },
  {
    path: "/skill",
    name: "skill",
    component: Skill
  },
  {
    path: "/about",
    name: "about",
    component: Contact
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "is-active"
});

export default router;
