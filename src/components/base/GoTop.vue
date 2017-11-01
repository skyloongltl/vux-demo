<template>
  <div>
    <div class="gotop">
      <ul>
        <li><a id="goTopBtn" href="javascript:;" @click="toTop"><i class="fa fa-arrow-up" title="返回顶部"></i></a></li>
        <li><a href="javascript:;"><i class="fa fa-chevron-left" title="上一文章"></i></a></li>
        <li><a href="javascript:;"><i class="fa fa-chevron-right" title="下一文章"></i></a></li>
        <li><a target="_self" href="javascript:;" @click="show7 = true"><i class="fa fa-list" title="查看目录"></i></a></li>
        <li><a href="http://localhost:8080/#/Home" class="user" target="_self"><i class="fa fa-home" title="返回首页"></i></a></li>
      </ul>
    </div>
    <actionsheet v-model="show7" :menus="menu7" theme="android" @on-click-menu="click">
    </actionsheet>
  </div>
</template>

<script>
  import {Actionsheet} from 'vux'

  export default {
    components: {
      Actionsheet
    },
    data () {
      return {
        show7: false,
        menu7: {
          menu1: '北京烤鸭',
          menu2: '陕西油泼面',
          menu3: '西安肉夹馍'
        }
      }
    },
    methods: {
      click (key) {
        switch (key) {
          case 'menu1':
            alert('想得美')
            break
          case 'menu2':
            alert('没有')
            break
          case 'menu3':
            alert('也没有')
            break
          default :
            alert('你倒是选一个啊')
            break
        }
      },
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
      }
    }
  }
</script>

<style>
  @import '../../../static/font-awesome-4.7.0/css/font-awesome.min.css';

  .gotop {
    position: fixed;
    top: 75%;
    left: 90%;
  }

  .gotop ul {
    list-style: none;
  }

  /*.gotop ul .user {
    border: 0;
  }*/

  .gotop li a {
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(83, 83, 83, 0.3);
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(83, 83, 83, 0.7);
    line-height: 10px;
    padding: 1px;
    text-align: center;
  }

  .gotop li a i {
    line-height: 20px;
    font-size: 10px;
  }

  .gotop li {
    padding-bottom: 4px;
  }

  .gotop li a:active {
    background-color: #148acc;
    color: #fff;
  }
</style>
