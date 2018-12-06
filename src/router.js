import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'
import Followers from './views/Followers.vue'
import Following from './views/Following.vue'
import Repository from './views/Repository.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/:username',
      name: 'user',
      component: User
    },
    {
      path: '/user/:username/followers',
      name: 'followers',
      component: Followers
    },
    {
      path: '/user/:username/following',
      name: 'following',
      component: Following
    },
    {
      path: '/user/:username/:repo',
      name: 'repository',
      component: Repository
    }
  ]
})
