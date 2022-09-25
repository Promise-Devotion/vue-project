import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "template-syntax",
          name: "TemplateSyntax",
          component: () => import("../views/baseknowledge/TemplateSyntax.vue"),
        },
        {
          path: "directives",
          name: "Directives",
          component: () => import("../views/baseknowledge/Directives.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/todolist",
      name: "todolist",
      component: () => import("../views/TodoList.vue"),
    },
  ],
});

export default router;
