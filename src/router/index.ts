import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  /**
	 * 三种模式
	 * "history": createWebHistory()
		"hash": createWebHashHistory()
		"abstract": createMemoryHistory()
	 */
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
        {
          path: "eventhandle",
          name: "Eventhandle",
          component: () => import("../views/baseknowledge/EventHandle.vue"),
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
    {
      path: "/pinia",
      name: "Pinia",
      component: () => import("../views/PiniaPage.vue"),
    },
    {
      path: "/router",
      name: "Router",
      component: () => import("../views/RouterView.vue"),
      // children: [
      //   {
      //     path: "detail",
      //     name: "Detail",
      //     component: () => import("../views/DetailView.vue"),
      //   },
      // ],
    },
    {
      path: "/detail",
      name: "Detail",
      component: () => import("../views/DetailView.vue"),
    },
  ],
});

export default router;
