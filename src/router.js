import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '*', redirect: '/'},
    {
      path: '/',
      name: 'home',
      component: () => import('./views/AllGalleries.vue')
    },
    {
      path: '/authors/:id',
      name: 'authorsGallery',
      component: () => import('./views/AllGalleries.vue')
    },
    {
      path: '/galleries/:id',
      name: 'singleGallery',
      component: () => import('./components/AppSingleGallery.vue')
    },
    {
      path: '/my-galleries',
      name: 'myGalleries',
      component: () => import('./views/MyGalleries.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/create',
      name: 'newGallery',
      component: () => import('./views/NewGallery.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
      meta: {requiresGuest: true}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {requiresGuest: true}
    },
  ]
})
