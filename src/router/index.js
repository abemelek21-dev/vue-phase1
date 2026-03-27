import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'
import UserDetailView from "../views/UserDetailView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  },
  {
    path: '/users/:id',
    name: 'user-detail',
    component: UserDetailView
  }
]

const router = new VueRouter({
  routes
})
// Navigation guard — runs before EVERY route change
// Like Laravel's middleware or Express's app.use() middleware
router.beforeEach((to, from, next) => {
  console.log(`Navigation from ${from.name} to ${to.name}`)
  next()// always call next() to allow the navigation
})
export default router
