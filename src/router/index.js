import { createWebHistory, createRouter } from "vue-router"
import Card from "@/views/AppCard.vue"
import Search from "@/views/AppSearch.vue"

const routes = [
  {
    path: "/",
    name: "search",
    component: Search,
    props: true
  },
  {
    path: "/location/:location",
    name: "card",
    component: Card,
    props: true
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
