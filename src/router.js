import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import register from './views/register.vue'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/Tobe',
      name: 'Tobe',
      component: () => import('./views/Tobe.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/meetup',
      name: 'meetup',
      component: () => import('./views/meetup.vue')
    },
    {
      path: '/myclassroom',
      name: 'myclassroom',
      component: () => import('./views/myclassroom.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/viewcourse/:viewId',
      name: 'viewcourse',
      component: () => import('./views/viewcourse.vue')
    },
    {
      path: '/viewsearch/:search',
      name: 'viewsearch',
      component: () => import('./views/viewsearch.vue')
    },
    {
      path: '/activate/:tokens',
      name: 'activate',
      component: () => import('./views/activate.vue')
    },
    {
      path: '/viewmeetup/:uuids',
      name: 'viewmeetup',
      component: () => import('./views/viewmeetup.vue')
    },
    {
      path: '/viewvideo',
      name: 'viewvideo',
      component: () => import('./views/viewvideo.vue')
    },
    {
      path: '/managemeetup',
      name: 'managemeetup',
      component: () => import('./views/managemeetup.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/createmeetup',
      name: 'createmeetup',
      component: () => import('./views/createmeetup.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/managemeetup/edit/:uuids',
      name: 'managemeetup/edit',
      component: () => import('./views/editmeetup.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/managecourse',
      name: 'managecourse',
      component: () => import('./views/managecourse.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/createcourse',
      name: 'createcourse',
      component: () => import('./views/createcourse.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/managecourse/edit/:uuid',
      name: 'managecourse/edit',
      component: () => import('./views/editcourse.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
