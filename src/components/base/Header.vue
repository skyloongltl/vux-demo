<template>
  <div>
    <x-header id="header" :left-options="{showBack: false}">
      <span class="title">skyloong博客</span>
      <x-icon class="icon" slot="right" type="navicon-round" @click="showPopup = true" size="20"></x-icon>
      <x-icon class="icon" slot="right" type="person" size="20" @click="login = true"></x-icon>
      <x-icon class="icon" slot="right" type="search" size="20" @click="search = true"></x-icon>
    </x-header>
    <div v-transfer-dom>
      <popup v-model="showPopup" @on-hide="close()" position="left" width="50%">
        <div>
          <group>
            <cell v-for="i in 20" :key="i" :title="i" link="https://www.baidu.com"></cell>
          </group>
        </div>
      </popup>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="login" class="dialog" hide-on-blur>
        <div class="img-box">
          <group title="login" style="max-width:100%">
            <x-input title="account">
              <x-icon slot="label" type="android-person" size="35"></x-icon>
            </x-input>
            <x-input title="passwd">
              <x-icon slot="label" type="android-lock" size="35"></x-icon>
            </x-input>
          </group>
          <div style="padding-top: 20px;padding-left: 10px">
            <x-button mini type="primary" action-type="submit">submit</x-button>
          </div>
        </div>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="search" class="search" hide-on-blur>
        <div class="img-box">
          <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import { XHeader, TransferDom, Popup, XDialog, Group, XInput, XButton, Search, Cell } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XInput,
      XDialog,
      Popup,
      XHeader,
      Group,
      XButton,
      Search,
      Cell
    },
    props: {
      showPopup: Boolean
    },
    data () {
      return {
        showPopup: false,
        login: false,
        search: false,
        autoFixed: false
      }
    },
    methods: {
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      },
      log (str) {
        console.log(str)
      },
      close () {
        this.$emit('showPopup', false)
      }
    }
  }
</script>

<style lang="less" scoped>
  .vux-header {
    background-color: #fff;
    height: 40px;
    .title {
      position: absolute;
      top: 1px;
      left: 30px;
      font-size: 23px;
      color: #1c63ff;
    }
    .icon {
      fill:#999;
      position:relative;
      top: 8px;
      left:5px;
      padding-right: 10px;
    }
  }

  .dialog {
    .weui-dialog{
      border-radius: 8px;
      padding-bottom: 8px;
    }

    .dialog-title {
      line-height: 30px;
      color: #666;
    }

    .img-box {
      height: 300px;
      overflow: hidden;
    }

    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
  .search {
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      height: 45px;
      overflow: hidden;
    }
  }
</style>

<style>
  #header .vux-header-right {
    top: 3px;
  }

  .dialog button.weui-btn {
    float: left;
  }

  .dialog .weui-cells__title {
    font-size: 16px;
    color: #000000;
  }

  .search .weui-dialog{
    border-radius: 5px;
    top:10%;
    left: 50%;
  }
</style>
