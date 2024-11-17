import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add',
    name: 'addProject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "add" */ '../views/AddProject.vue') //Lazy-Loaded when you visit /add, load(render). 
  },
  {
    path: '/edit',
    name: 'editProject',
    component: () => import(/* webpackChunkName: "edit" */ '../views/EditProject.vue') //Lazy-Loaded
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
