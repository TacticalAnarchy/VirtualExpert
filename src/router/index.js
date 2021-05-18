import { createRouter, createWebHistory } from "vue-router";

import VirtualExpert from "../views/VirtualExpert";
import Search from "../views/Search";
import Admin from "../views/Admin";

const routes = [
  {
    path: "/VirtualExpert",
    name: "VirtualExpert",
    component: VirtualExpert,
  },
  {
    path: "/",
    alias: ["/Search"],
    name: "Search",
    component: Search,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/view",
    name: "view",
    component: () => import("../components/admin/ListProducts"),
  },
  {
    path: "/EditComponent",
    name: "EditComponent",
    component: () => import("../components/admin/EditComponent"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
