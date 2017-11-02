<template>
  <div>
    <div v-for="src in list">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
      <div>
        <p>上篇文章讲过打印数据的函数； but 打印函数有个弊端是会破坏打印页面的 html 结构； 在不使用 IDE 编辑器断点调试的情况； 有什么方案既能打印数据还不破坏页面结构呢？ 使用 thinkphp 的童鞋肯定对下面这个小图标很熟悉； 点击打开是会显示当前页面的一些信息； 就像 chrome 或者 firefox 的 F12 开发者调试工具一样； 比较有用的是当前页面的...</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { XImg } from 'vux'
  export default {
    components: {
      XImg
    },
    methods: {
      success (src, ele) {
        console.log('success load', src)
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error (src, ele, msg) {
        console.log('error load', msg, src)
        const span = ele.parentNode.querySelector('span')
        span.innerText = 'load error'
      }
    },
    data () {
      return {
        list: [
          'https://o5omsejde.qnssl.com/demo/test1.jpg',
          'https://o5omsejde.qnssl.com/demo/test2.jpg',
          'https://o5omsejde.qnssl.com/demo/test0.jpg',
          'https://o5omsejde.qnssl.com/demo/test4.jpg',
          'https://o5omsejde.qnssl.com/demo/test5.jpg',
          'https://o5omsejde.qnssl.com/demo/test6.jpg',
          'https://o5omsejde.qnssl.com/demo/test7.jpg',
          'https://o5omsejde.qnssl.com/demo/test8.jpg'
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .ximg-demo {
    width: 30%;
    height: 180px;
    float: left;
    margin:10px;
  }
  .ximg-error {
    background-color: yellow;
  }
  .ximg-error:after {
    content: '加载失败';
    color: red;
  }
</style>
