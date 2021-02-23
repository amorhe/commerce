<template>
  <div class="container">
    <div class="main_body">
      <van-image class="success" :src="require('@/assets/img/finish.png')"></van-image>
      <span class="fontTitle status">支付成功</span>
      <span class="colorSm">您的商品购买成功</span>
      <div class="money">
        <span class="fontTitle">¥</span>
        <span class="num">99.00</span>
      </div>
      <van-button class="btn" color="#494B5D" to="/" replace>返回首页</van-button>
    </div>
    <div class="colorSm msg">请在「我的」 >「订单」中查询订单状态</div>
  </div>
</template>

<script>
  export default {
    name: 'tradeFinish'
  }
</script>

<style scoped lang="less">
  .main_body {
    padding: 110px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .success {
      width: 100px;
      height: 100px;
      margin-bottom: 13px;
    }
    .status {
      color: #5DB844;
    }
    .money {
      margin: 20px 0 85px;

      .num {
        font-size: 80px;
        font-weight: bold;
      }
    }
    .btn {
      width: 690px;
      height: 100px;
    }
  }
  .msg {
    width: 100vw;
    position: fixed;
    bottom: 30px;
    left: 0;
    text-align: center;
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>
