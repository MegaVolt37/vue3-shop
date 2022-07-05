import { createRouter, createWebHistory } from "vue-router";
import Products from "../views/Products.vue";

const routes = [
  {
    path: "/",
    name: "HomeProducts",
    component: Products,
  },
  {
    path: "/cart",
    name: "CartProduct",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});

export default router;
