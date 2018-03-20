import Vue from 'vue'
import Router from 'vue-router'
import formGenerator from '../pages/formGenerator/formGenerator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'formGenerator',
      component: formGenerator
    }
  ]
})
