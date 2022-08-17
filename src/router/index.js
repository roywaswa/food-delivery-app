import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/HomePage.vue')
    },
    {
      path: '/foods',
      name: 'foods',
      component: () => import(/* webpackChunkName: "foods" */ '../views/FoodsPage.vue')
    },
    {
      path: '/foods/:id',
      name: 'foods-details',
      component: () => import(/* webpackChunkName: "foods" */ '../views/FoodDetailsPage.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "cart" */ '../views/CartPage.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "account" */ '../views/AccountPage.vue')
    }
  ]
})

export default router
