// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import OverWrite from './components/Overwrite-left.vue'
import List from './components/List.vue'
import ArticleList from './components/ArticleList.vue'
import Crumbs from './components/Crumbs.vue'
import Article from './components/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/overwrite',
    component: OverWrite
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
