import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/exam/:id',
      name: 'exam',
      component: () => import( /* webpackChunkName: "exam" */ './views/Exam.vue')
    },
    {
      path: '/exam/:id/question/:id',
      name: 'question',
      component: () => import( /* webpackChunkName: "question" */ './views/Pruefungsfrage.vue')
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})