<template>
  <div class="article-content-comment">
    <div class="article">
      <h1 class="title">这是一篇博客</h1>
      <div class="list">
        <x-icon type="android-person" size="17" style="width: auto;"></x-icon>
        <b>李天龙</b>
      </div>
      <div class="content">
        <p>上篇文章讲过打印数据的函数；<br><a href="https://baijunyao.com/article/123">写给thinkphp开发者的laravel系列教程(九)打印数据</a><br>but 打印函数有个弊端是会破坏打印页面的 html 结构；<br>在不使用 IDE 编辑器断点调试的情况；<br>有什么方案既能打印数据还不破坏页面结构呢？
        </p>
        <p>使用 thinkphp 的童鞋肯定对下面这个小图标很熟悉；<br><img src="/uploads/article/20171022/59eca5744185b.jpg" alt="" title=""><br>点击打开是会显示当前页面的一些信息；<br>就像 chrome 或者 firefox 的 F12 开发者调试工具一样；<br>比较有用的是当前页面的数据是执行了那些 sql 后得出的；<br><img
          src="/uploads/article/20171022/59eca620bc56b.jpg" alt=""
          title=""><br>我们可以借助这个小功能把数据打印在 trace 中；<br>比如说要打印一个 <code>$data</code> ；</p>
        <pre><code class="lang-php">$data = [
    'title' =&gt; '白俊遥博客',
];
trace($data);</code></pre>
        <p>效果就是下面这个样子的；<br><img src="/uploads/article/20171022/59eca718e9153.jpg" alt="" title=""></p>
        <p>laravel 并没有内置这样的工具；<br>不过 laravel 的生态做的好；<br>有一个扩展包可以实现同样的效果；<br><a
          href="https://github.com/barryvdh/laravel-debugbar">barryvdh/laravel-debugbar</a><br>安装的过程就照着文档来吧；<br>成功后的效果是在左下角有这样一个小图标；<br><img
          src="/uploads/article/20171022/59ecba02cf60c.jpg" alt="" title=""><br>点击后是这个样子的；<br><img
          src="/uploads/article/20171022/59ecba1de4937.jpg" alt="" title=""><br>颜值是要比 thinkphp 的 trace 高不少；<br>我最常用的也是觉得最好用的就是 Queries 这项；<br>查看运行的 sql 相当的方便啊；<br>同样的；如果想在 debugbar 中打印数据；<br>调用的方式如下；
        </p>
        <pre><code class="lang-php">$data = [
    'title' =&gt; '白俊遥博客',
];
debug($data);</code></pre>
        <p>效果就是这个样子了；<br><img src="/uploads/article/20171022/59ecbb05adfb6.jpg" alt="" title=""></p>
      </div>
      <ul class="prev-next">
        <li class="prev">
          上一篇：
          <span>没有了</span>
        </li>
        <li class="next">
          下一篇：
          <a href="javascript:;">创建QQ群及捐赠渠道</a>
        </li>
      </ul>
    </div>
    <div class="comment">
      <div class="box-textarea">
        <div class="box-content" contenteditable="true">请先登录后发表评论</div>
        <ul>
          <li>
            <input class="email" type="text" name="email" placeholder="接收回复的email地址" value="">
          </li>
          <li class="submit-button">
            <input type="button" value="评 论">
          </li>
          <li class="clear-float"></li>
        </ul>
      </div>
      <div class="clear-float"></div>
      <div class="comment-title">
        <ul class="row">
          <li class="col-6">最新评论</li>
          <li class="col-6"><p>总共<span>10</span>条评论</p></li>
        </ul>
      </div>
      <div class="comment-list">
        <div class="one-comment">
          <div class="comment-details">
            <div class="col-3 header-img" style="float: left">
              <img src="../../../static/img/581.jpg"/>
            </div>
            <div class="col-9" style="float: left;padding-left: 20px;font-size: 14px">
              <p>
                <span style="color: #FF9900">skyloong：</span>
                加微看片:boys11t
              </p>
              <p style="float: left">2016-11-10 21:36:08</p>
              <a href="javascript:;" style="float: left;padding-left: 10px;">回复</a>
            </div>
          </div>
          <div class="comment-reply">
            <div class="col-3 header-img" style="float: left">
              <img src="../../../static/img/581.jpg"/>
            </div>
            <div class="col-9" style="float: left;padding-left: 20px;font-size: 14px">
              <p>
                <span style="color: #FF9900">skyloong 回复 sky：</span>
                加微看片:boys11t
              </p>
              <p style="float: left">2016-11-10 21:36:08</p>
              <a href="javascript:;" style="float: left;padding-left: 10px;">回复</a>
            </div>
          </div>
          <div class="comment-reply">
            <div class="col-3 header-img" style="float: left">
              <img src="../../../static/img/581.jpg"/>
            </div>
            <div class="col-9" style="float: left;padding-left: 20px;font-size: 14px">
              <p>
                <span style="color: #FF9900">sky 回复 skyloong：</span>
                加微看片:boys11t
              </p>
              <p style="float: left">2016-11-10 21:36:08</p>
              <a href="javascript:;" style="float: left;padding-left: 10px;">回复</a>
            </div>
          </div>
        </div>
        <div class="one-comment">
          <div class="comment-details">
            <div class="col-3 header-img" style="float: left">
              <img src="../../../static/img/581.jpg"/>
            </div>
            <div class="col-9" style="float: left;padding-left: 20px;font-size: 14px">
              <p>
                <span style="color: #FF9900">skyloong：</span>
                加微看片:boys11t
              </p>
              <p style="float: left">2016-11-10 21:36:08</p>
              <a href="javascript:;" style="float: left;padding-left: 10px;">回复</a>
            </div>
          </div>
          <div class="comment-reply">
            <div class="col-3 header-img" style="float: left">
              <img src="../../../static/img/581.jpg"/>
            </div>
            <div class="col-9" style="float: left;padding-left: 20px;font-size: 14px">
              <p>
                <span style="color: #FF9900">skyloong 回复 sky：</span>
                加微看片:boys11t
              </p>
              <p style="float: left">2016-11-10 21:36:08</p>
              <a href="javascript:;" style="float: left;padding-left: 10px;">回复</a>
            </div>
          </div>
          <div class="comment-reply">
            <div class="col-3 header-img" style="float: left">
              <img src="../../../static/img/581.jpg"/>
            </div>
            <div class="col-9" style="float: left;padding-left: 20px;font-size: 14px">
              <p>
                <span style="color: #FF9900">sky 回复 skyloong：</span>
                加微看片加微看片加微看片加微看片加微看片加微看片:boys11t
              </p>
              <p style="float: left">2016-11-10 21:36:08</p>
              <a href="javascript:;" style="float: left;padding-left: 10px;">回复</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Divider} from 'vux'

  export default {
    components: {
      Divider
    }
  }
</script>

<style>
  .article-content-comment {
    background-color: #F8F8F8;
  }

  .article {
    width: 95%;
    margin: 10px auto;
    background-color: #fff;
  }

  .comment {
    width: 95%;
    margin: 10px auto;
    background-color: #fff;
  }

  .comment .comment-list {
    padding: 10px 10px 10px 10px;
    line-height: 25px;
  }

  .comment .comment-list .header-img {
    border: 0 solid;
    width: 45px;
    height: 45px;
  }

  .comment .comment-list .comment-details {
    overflow: hidden;
  }

  .comment .comment-list .header-img img {
    width: 45px;
    height: 45px;
  }

  .comment .comment-list .one-comment {
    padding: 10px 0 10px;
    border-bottom: 1px solid #E6EAED;
  }

  .comment .comment-list .one-comment .comment-reply {
    padding: 10px 0 0 65px;
  }

  .comment .comment-title {
    margin-top: 30px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #88ABC3;
    color: #333;
    font-size: 14px;
  }

  .comment .comment-title .row {
    list-style: none;
    overflow: hidden;
    margin-right: 10px;
    margin-left: 10px;
  }

  .comment .comment-title .row li {
    float: left;
  }

  .comment .comment-title .row p {
    position: absolute;
    right: 20px;
  }

  .comment .box-textarea {
    margin: 10px auto;
    width: 95%;
    height: 130px;
    border: 2px solid #CCD4D9;
    border-radius: 4px;
    position: relative;
    z-index: 1;
  }

  .comment .box-textarea ul li .email {
    width: 70%;
    line-height: 35px;
    text-align: left;
    color: #fff;
    font-size: 14px;
    border: 1px solid #CCD4D9;
    border-radius: 4px;
    position: absolute;
    bottom: 3px;
    left: 5px;
    padding: 0 10px;
  }

  .comment .box-textarea ul .submit-button {

  }

  .comment .box-textarea ul .submit-button input {
    position: absolute;
    bottom: 3px;
    right: 8px;
    width: 60px;
    height: 35px;
    border: none;
    line-height: 35px;
    font-size: 14px;
    background: url('http://www.divcss5.com/uploads/allimg/1309/1_130916141709_1.jpg') no-repeat left top;
    color: #FFF;
    padding-bottom: 4px;
  }

  /*.comment .box-textarea ul li .email:focus{
    border-style:solid;
    border-color: #03a9f4;
    box-shadow: 0 0 15px #03a9f4;
  }*/

  .comment .box-textarea .box-content {
    padding: 5px;
    width: 97%;
    height: 75px;
    border: none;
    border-bottom: 1px solid #E6EAED;
    border-radius: 4px;
    color: #999;
    overflow-y: auto;
    font-size: 14px;
  }

  .article .title {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }

  .article .prev-next {
    margin-top: 40px;
    padding-left: 10px;
    width: 100%;
    height: 60px;
    font-size: 13px;
  }

  .article .prev-next .prev {
    width: 100%;
    height: 20px;
    line-height: 20px;
  }

  .article .prev-next .next {
    width: 100%;
    height: 20px;
    line-height: 20px;
  }

  .article .content {
    padding-left: 10px;
    font-size: 14px;
  }

  .list {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding-left: 20px;
    padding-bottom: 20px;
  }

  .list b {
    color: rgb(0, 10, 30);
    display: inline-block;
    padding-left: 2px;
    padding-right: 10px;
    padding-top: 4px
  }

  .clear-float {
    clear: both;
  }

  .col-1 {
    width: 8.33%;
  }

  .col-2 {
    width: 16.66%;
  }

  .col-3 {
    width: 25%;
  }

  .col-4 {
    width: 33.33%;
  }

  .col-5 {
    width: 41.66%;
  }

  .col-6 {
    width: 50%;
  }

  .col-7 {
    width: 58.33%;
  }

  .col-8 {
    width: 66.66%;
  }

  .col-9 {
    width: 75%;
  }

  .col-10 {
    width: 83.33%;
  }

  .col-11 {
    width: 91.66%;
  }

  .col-12 {
    width: 100%;
  }
</style>
