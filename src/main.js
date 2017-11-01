// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import RootHome from './components/HelloFromVux'
import Header from './components/base/Header.vue'
import List from './components/base/List.vue'
import ArticleList from './components/base/ArticleList.vue'
import Crumbs from './components/base/Crumbs.vue'
import Article from './components/base/Article.vue'
import Top from './components/base/GoTop.vue'
import Page from './components/base/Page.vue'

import Home from './components/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/',
    component: RootHome
  },
  {
    path: '/header',
    component: Header
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/articleList',
    component: ArticleList
  },
  {
    path: '/crumbs',
    component: Crumbs
  },
  {
    path: '/article',
    component: Article
  },
  {
    path: '/top',
    component: Top
  },
  {
    path: '/page',
    component: Page
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
