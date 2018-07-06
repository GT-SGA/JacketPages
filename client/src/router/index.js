import Vue from 'vue'
import Router from 'vue-router'
import Bills from '@/components/Bills'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // Make the home page show the bills
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
