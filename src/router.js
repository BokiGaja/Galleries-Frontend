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
      path: '/edit-gallery/:id',
      name: 'editGallery',
      component: () => import('./views/NewGallery.vue')
    },
    {
      path: '/authors/:id',
      name: 'authorsGallery',
      component: () => import('./views/UsersGallery.vue')
    },
    {
      path: '/my-galleries',
      name: 'myGalleries',
      component: () => import('./views/UsersGallery.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/galleries/:id',
      name: 'singleGallery',
      component: () => import('./views/SingleGallery.vue')
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
