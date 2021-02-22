<template>
  <div class="container">
    <van-radio-group v-model="radio" checked-color="#F15663">
      <div class="addressList" v-for="(item,index) in 2" :key="index">
        <div class="content_top">
          <span class="fontTitle">陈先生，18522222222</span>
          <span>四川省 成都市 高新区新希望国际B座29楼四川省 成都市 高际B座29楼</span>
        </div>
        <div class="content_bottom flex">
          <van-radio :name="index">设置默认地址</van-radio>
          <div>
            <span class="fontTitle del">删除</span>
            <span  class="fontTitle edit">编辑</span>
          </div>
        </div>
      </div>
    </van-radio-group>
    <div class="handle_box">
      <div class="content" @click="$router.push('./addressEdit')">添加地址</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'addressList',
    data () {
      return {
        radio: 0
      }
    }
  }
</script>

<style scoped lang="less">
  .addressList {
    padding: 0 30px;
    border-bottom: 12px #F9FAF9 solid;

    .content_top {
      height: 166px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px #F0F4F6 solid;
    }

    .content_bottom {
      height: 127px;

      .del {
        color: #F15663;
        margin-right: 26px;
      }

      .edit {
        color: #3361C2;
      }
    }
  }
  .handle_box {
    height: calc(133px + env(safe-area-inset-bottom));

    .content {
      width: 100vw;
      height: 132px;
      border-top: 1px #F0F4F6 solid;
      background: #fff;
      position: fixed;
      left: 0;
      bottom: 0;
      padding-bottom: env(safe-area-inset-bottom);
      color: #3361C2;
      font-weight: bold;
      font-size: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
