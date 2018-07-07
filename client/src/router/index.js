import Vue from 'vue'
import Router from 'vue-router'
import Bills from '@/components/Bills'
import ViewBills from '@/components/ViewBills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // Make the home page show the bills
      path: '/',
      name: 'Bills',
      component: Bills
    },
    /*
    {
      // Make the home page show the bills
      path: '/bills',
      name: 'ViewBills',
      component: ViewBills
    }
    */
  ]
})
