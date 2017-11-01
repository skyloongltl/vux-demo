<template>
  <div>
    <sky-Header :show-popup="showPopup" @showPopup="parentLisen"></sky-Header>
    <article-list></article-list>
    <page></page>
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

  export default {
    components: {
      SkyHeader,
      ArticleList,
      Page
    },
    data () {
      return {
        showPopup: false
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
      }
    }
  }
</script>

<style>
  .gotop {
    position: fixed;
    top: 80%;
    left: 90%;
  }
</style>
