import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import myPage from '../components/myPage'
import User from '../components/User'
import notFind from '../components/404'
import userInfo from '../components/userInfo'
import userScore from '../components/userScore'
import home from '../components/home'
import sidebar from '../components/sidebars'
import contents from '../components/contents'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 命名视图
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          components: {
            a: sidebar,
            b: contents
          }
        }
      ]
    },
    {
      path: '/new1',
      name: 'myPage',
      component: myPage
    },
    // 动态路径参数 以冒号开头
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          path: 'userInfo',
          component: userInfo
        },
        {
          path: 'userScore',
          component: userScore
        }
      ]
    },
    // 404页面
    {
      path: '/*',
      component: notFind
    }
  ]
})
