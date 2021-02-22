<template>
  <div class="container">
    <div class="bag_box">
      <span class="money">82.12</span>
      <span class="colorSm">可提现金额（元），满50元可申请提现</span>
      <div class="flex info">
        <div>
          <div class="fontTitle">3</div>
          <span class="colorSm">已提现（元）</span>
        </div>
        <div>
          <div class="fontTitle">192</div>
          <span class="colorSm">未结算（元）</span>
        </div>
      </div>
    </div>
    <div class="income_box">
      <div>累计收入 ¥2738.28</div>
      <div>自购收益 ¥282.12</div>
      <div>分享收益 ¥2738.28</div>
      <div>晒单收益 ¥282.12</div>
    </div>
    <div class="handle_wallet">
      <div class="content">
        <span class="fontTitle details" @click="$router.push('./tradeDetails')">交易明细</span>
        <van-button color="#F15663" class="btn" to="/withdrawal">提现</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wallet'
  }
</script>

<style scoped lang="less">
  .bag_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 130px 67px;

    .money {
      font-size: 80px;
      font-weight: bold;
    }

    .info {
      width: 100%;
      margin-top: 35px;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }

  .income_box {
    height: 164px;
    background: #F9FAF9;
    color: #757575;
    display: flex;
    flex-wrap: wrap;
    padding: 0 30px;

    > div {
      width: 345px;
      height: 81px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;

      &:nth-child(1) {
        border-right: 1px #F0F4F6 solid;
      }

      &:nth-child(2) {
        border-bottom: 1px #F0F4F6 solid;
      }

      &:nth-child(3) {
        border-right: 1px #F0F4F6 solid;
        border-top: 1px #F0F4F6 solid;
      }
    }
  }

  .handle_wallet {
    height: calc(213px + env(safe-area-inset-bottom));

    .content {
      width: 100vw;
      height: calc(213px + env(safe-area-inset-bottom));
      padding: 0 30px;
      box-sizing: border-box;
      padding-bottom: env(safe-area-inset-bottom);
      position: fixed;
      left: 0;
      bottom: 0;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;

      .details {
        color: #3361C2;
        margin-bottom: 43px;
      }

      .btn {
        height: 100px;
        width: 100%;
      }
    }
  }
</style>
