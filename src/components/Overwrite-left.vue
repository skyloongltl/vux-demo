<template>
  <div>
    <x-header>
      <span>overwrite-left</span>
      <x-icon slot="overwrite-left" type="navicon-round" @click="show = true" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      <x-icon slot="right" type="person" size="35" @click="login = true" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      <x-icon slot="right" type="search" size="35" @click="search = true" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>
    <div v-transfer-dom>
      <popup v-model="show" position="left" width="50%">
        <div class="position-horizontal-demo">
        </div>
      </popup>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="login" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <group title="login" style="max-width:100%">
            <x-input title="account">
              <x-icon slot="label" type="android-person" size="35"></x-icon>
            </x-input>
            <x-input title="passwd">
              <x-icon slot="label" type="android-lock" size="35"></x-icon>
            </x-input>
            <x-button type="primary" action-type="submit">submit</x-button>
          </group>
        </div>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="search" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import { XHeader, TransferDom, Popup, XDialog, Group, XInput, XButton, Search } from 'vux'

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
      Search
    },
    data () {
      return {
        show: false,
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .dialog-demo {
    .weui-dialog{
      border-radius: 8px;
      padding-bottom: 8px;
    }
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      height: 350px;
      overflow: hidden;
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
</style>
