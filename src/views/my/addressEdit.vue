<template>
  <div class="container">
    <div class="content_top">
      <van-field v-model="name" label="收件人姓名" placeholder="请输入收件人姓名"/>
      <van-field v-model="phone" label="联系电话" placeholder="请输入联系电话"/>
    </div>
    <van-cell title="地区" is-link :value="province + city + area" :clickable="false"
              @click="show = true"/>
    <van-field
      v-model="address_details"
      autosize
      type="textarea"
      placeholder="请输入详细地址"
    />
    <div class="handle_box">
      <div class="box">
        <van-button class="btn" color="#F15663">保存地址</van-button>
      </div>
    </div>
    <van-popup position="bottom" v-model="show">
      <van-area :area-list="areaList" @confirm="confirmTrick" @cancel="cancelTrick"/>
    </van-popup>
  </div>
</template>

<script>
  import { areaList } from '../../assets/basic/city'

  export default {
    name: 'addressEdit',
    data () {
      return {
        name: '',
        phone: '',
        show: false,
        areaList,
        province: '请选择',
        city: '',
        area: '',
        address_details: ''
      }
    },
    methods: {
      confirmTrick (e) {
        this.show = false
        this.province = e[0].name
        this.city = e[1].name
        this.area = e[2].name
      },
      cancelTrick () {
        this.show = false
      }
    }
  }
</script>

<style scoped lang="less">
  .content_top {
    border-bottom: 12px #F9FAF9 solid;
  }

  .handle_box {
    height: calc(130px + env(safe-area-inset-bottom));

    .box {
      width: 100vw;
      height: calc(130px + env(safe-area-inset-bottom));
      padding: 0 30px;
      box-sizing: border-box;
      padding-bottom: env(safe-area-inset-bottom);
      position: fixed;
      left: 0;
      bottom: 0;
      background: #fff;

      .btn {
        width: 100%;
        height: 100px;
      }
    }
  }
</style>
