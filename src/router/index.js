import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Profile from '../views/Profile'
import Favorite from '../views/Favorites'
import Download from '../views/Download'
import Music from '../views/Music'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users/1',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/favorite',
    name: 'Favorite Music',
    component: Favorite
  },
  {
    path: '/download-music',
    name: 'Download Music',
    component: Download
  },
  {
    path: '/music',
    name: 'All Music',
    component: Music
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
