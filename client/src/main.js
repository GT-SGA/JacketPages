// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './components/css/default.css'
import './components/css/reset.css'
//import './components/css/fonts.css'
import './components/css/typography.css'
//import './components/css/layout.css'
import './components/css/blocks.css'
import './components/css/content.css'
//import './components/css/editor.css'
import './components/css/static.css'
//import './components/css/icing.css'
import './components/css/print.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
