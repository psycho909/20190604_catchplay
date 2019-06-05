import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue')
    },
    {
      path: '/advanced',
      name: 'advanced',
      component: () => import('./views/Advanced.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('./views/Edit.vue')
    }
  ]
})
