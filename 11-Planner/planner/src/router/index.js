import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddProject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "add" */ '../views/AddProject.vue') //Lazy-Loaded when you visit /add, load(render). 
  },
  {
    path: '/project/:id',
    name: 'EditProject',
    component: () => import(/* webpackChunkName: "edit" */ '../views/EditProject.vue'), //Lazy-Loaded
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
