<template>
  <div>
    <sky-Header :show-popup="showPopup" @showPopup="parentLisen"></sky-Header>
    <crumbs></crumbs>
    <article-c></article-c>
    <go-top></go-top>
  </div>
</template>

<script>
  import SkyHeader from './base/Header.vue'
  import Crumbs from './base/Crumbs.vue'
  import ArticleC from './base/Article.vue'
  import GoTop from './base/GoTop.vue'

  export default {
    components: {
      SkyHeader,
      Crumbs,
      ArticleC,
      GoTop
    }
  }
</script>
