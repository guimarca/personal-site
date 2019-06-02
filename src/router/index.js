import Vue from 'vue'
import Router from 'vue-router'
import Education from '@/components/Education'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Education',
      component: Education
    }
  ]
})
