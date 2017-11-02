<template>
  <div>
    <sky-Header :show-popup="showPopup" @showPopup="parentLisen"></sky-Header>
    <crumbs v-if="path.match(/^\/home/i) != '/home'"></crumbs>
    <article-list></article-list>
    <page :url="url"></page>
    <div class="gotop">
      <ul>
        <li><a id="goTopBtn" href="javascript:;" @click="toTop"><i class="fa fa-arrow-up" title="返回顶部"></i></a></li>
        <li><a target="_self" href="javascript:;" @click="showPopup = true"><i class="fa fa-list" title="查看目录"></i></a></li>
        <li><a href="http://localhost:8080/#/Home" class="user" target="_self"><i class="fa fa-home" title="返回首页"></i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SkyHeader from './base/Header.vue'
  import ArticleList from './base/ArticleList.vue'
  import Page from './base/Page.vue'
  import Crumbs from './base/Crumbs.vue'

  export default {
    components: {
      SkyHeader,
      ArticleList,
      Page,
      Crumbs
    },
    data () {
      return {
        showPopup: false,
        path: '',
        url: ''
      }
    },
    methods: {
      toTop () {
        var gotoTop = function () {
          var currentPosition = document.documentElement.scrollTop || document.body.scrollTop
          currentPosition -= 10
          if (currentPosition > 0) {
            window.scrollTo(0, currentPosition)
          } else {
            window.scrollTo(0, 0)
            clearInterval(timer)
            timer = null
          }
        }
        var timer = setInterval(gotoTop, 1)
      },
      parentLisen (evtValue) {
        this.showPopup = evtValue
      },
      isHome () {
        if (this.$route.path.match(/^\/classify\//i) == '/classify/') {
          this.url = 'http://localhost:8080/#/classify/' + this.$route.params.id + '/'
        } else {
          this.url = 'http://localhost:8080/#/home/'
        }
      }
    },
    mounted () {
      this.path = this.$route.path
      this.isHome()
    }
  }
</script>

<style lang="less" scoped>
  .gotop {
    position: fixed;
    top: 80%;
    left: 90%;
  }
</style>

<style>
  body {
    background: url(../../static/img/bj.png) repeat top left scroll;
    font-size: 12px;
    line-height: 150%;
    color: rgba(35, 35, 35, 1)
  }
</style>
