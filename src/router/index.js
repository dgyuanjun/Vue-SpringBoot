import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'//组件的位置
import Login from '@/components/Login'
import Fail from '@/components/Fail'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',//系统的首页面url
      name: 'Login',
      component: Login//对应上文的import
    },{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/Fail',
      name: 'Fail',
      component: Fail
    }
  ]
})
