<template>
  <div class="container">
    <div class="with_header flex">
      <span class="fontTitle">提现至微信</span>
      <span class="msg" @click="$router.push('./bindChat')">请绑定提现微信号</span>
    </div>
    <div class="main_body">
      <div class="input_box">
        <span class="fontTitle">¥</span>
        <van-field class="money" type="digit" v-model="value" placeholder="请输入提现金额"/>
      </div>
      <div class="flex">
        <span class="colorSm">可提现金额：72元</span>
        <span class="all">全部提现</span>
      </div>
    </div>
    <div class="handle_box">
      <div class="box">
        <van-button class="btn" color="#F15663">提现</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Withdrawal',
    data () {
      return {
        value: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .with_header {
    padding: 0 30px;
    height: 126px;
    border-bottom: 12px #F9FAF9 solid;

    .msg {
      color: #3361C2;
    }
  }

  .main_body {
    padding: 0 30px;

    .input_box {
      border-bottom: 1px #F0F4F6 solid;
      display: flex;
      align-items: center;
      margin: 26px 0;

      .money {
        font-size: 60px;
        font-weight: bold;
      }
    }

    .all {
      color: #3361C2;
    }
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
