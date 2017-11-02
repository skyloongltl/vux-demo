<template>
  <div class="crumbs">
    <ul>
      <li><a href="#">PHP</a></li>
      <li><a href="#">PHP</a></li>
      <li><a href="#">PHP</a></li>
      <li><a href="#">PHP</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
  }
</script>


<style lang="less" scoped>
  .crumbs ul{
    list-style: none;
  }

  .crumbs ul li a{
    float: left;
    margin-right: 11px;
    display: inline-block;
    position: relative;
    height: 17px;
    padding: 3px 6px 0 6px;
    text-align: center;
    background-color: #3498db;
    color: #fff;
    text-decoration: none;
    font-size: 10px;
  }

  .crumbs ul li a:after{
    content: "";
    border-left: 10px solid #3498db;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    position: absolute;
    right: -10px;
    top: 0;
  }

  .crumbs ul li a:before{
    content: "";
    border-top: 10px solid #3498db;
    border-bottom: 10px solid #3498db;
    border-left: 10px solid transparent;
    position: absolute;
    top: 0;
    left: -10px;
  }

  .crumbs ul li:first-child a{
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .crumbs ul li:first-child a:before{
    display: none;
  }

  .crumbs ul li:last-child a{
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .crumbs ul li:last-child a:after{
    display: none;
  }
</style>
