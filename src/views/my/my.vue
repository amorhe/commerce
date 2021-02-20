<template>
  <div class="container">
    <div class="my_top" @click="$router.push('./vip')">
      <div class="flex">
        <div>
          <div class="fontTitle">核算</div>
          <span>分享每一笔收益</span>
        </div>
        <van-image class="avatar"
                   src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=306152466,1066631514&fm=11&gp=0.jpg"
                   round
        ></van-image>
      </div>
      <div class="content flex">
        <div>
          <span class="vip">会员中心</span>
          <span>成为会员获取更多收益</span>
        </div>
        <van-button class="btn">立即开通</van-button>
      </div>
    </div>

    <div class="main_body">
      <div class="flex">
        <span class="fontTitle">订单管理</span>
        <span class="colorSm" @click="checkOrders">全部</span>
      </div>
      <div class="orderStatus flex">
        <van-badge :dot="false">
          <div class="content">
            <van-image class="icon" :src="require('@/assets/img/order1.png')"></van-image>
            <span>待支付</span>
          </div>
        </van-badge>
        <van-badge dot>
          <div class="content">
            <van-image class="icon" :src="require('@/assets/img/order2.png')"></van-image>
            <span>待发货</span>
          </div>
        </van-badge>
        <van-badge dot>
          <div class="content">
            <van-image class="icon" :src="require('@/assets/img/order3.png')"></van-image>
            <span>待收货</span>
          </div>
        </van-badge>
        <van-badge dot>
          <div class="content">
            <van-image class="icon" :src="require('@/assets/img/order4.png')"></van-image>
            <span>待晒单</span>
          </div>
        </van-badge>
      </div>
      <div class="package flex">
        <div>
          <span class="mr fontTitle">钱包</span>
          <span class="colorSm">累计收益6720.28元</span>
        </div>
        <van-icon class="colorSm" name="arrow"/>
      </div>
      <div class="tool">
        <div class="fontTitle">我的工具</div>
        <div class="content">
          <div>
            <van-image class="icon" :src="require('@/assets/img/tool1.png')"></van-image>
            <span>地址管理</span>
          </div>
          <div>
            <van-image class="icon" :src="require('@/assets/img/tool2.png')"></van-image>
            <span>分享好友</span>
          </div>
          <div>
            <van-image class="icon" :src="require('@/assets/img/tool3.png')"></van-image>
            <span>晒单记录</span>
          </div>
          <div>
            <van-image class="icon" :src="require('@/assets/img/tool4.png')"></van-image>
            <span>收益说明</span>
          </div>
          <div>
            <van-image class="icon" :src="require('@/assets/img/tool5.png')"></van-image>
            <span>联系客服</span>
          </div>
          <div>
            <van-image class="icon" :src="require('@/assets/img/tool6.png')"></van-image>
            <span>微信公众号</span>
          </div>
        </div>
      </div>
      <div class="colorSm msg">获取佣金消息，请关注微信公众号</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my',
    methods: {
      checkOrders () {
        this.$router.push('./order')
      }
    }
  }
</script>

<style scoped lang="less">
  .my_top {
    width: 100vw;
    height: 285px;
    background-color: #F9FAF9;
    box-shadow: -5px -10px 10px 0 rgba(0, 0, 0, 0.1);
    padding: 50px 30px 0;
    box-sizing: border-box;
    position: relative;

    .avatar {
      width: 100px;
      height: 100px;
    }

    .content {
      width: 690px;
      height: 100px;
      position: absolute;
      left: 30px;
      bottom: 0;
      background-image: url('~@/assets/img/my_top_bg.png');
      background-position: 0 0;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 0 20px 0 30px;
      box-sizing: border-box;
      color: #D5D9DC;

      .vip {
        color: #F4CFA4;
        font-size: 28px;
        font-weight: bold;
        margin-right: 16px;
      }

      .btn {
        height: 60px;
        background: #D5D9DC;
        color: #494B5D;
        font-size: 22px;
        font-weight: bold;
        border: none;
      }
    }
  }

  .main_body {
    padding: 43px 30px;

    .orderStatus {
      padding: 23px 25px 47px;

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #757575;

        .icon {
          width: 50px;
          height: 50px;
          margin-bottom: 15px;
        }
      }
    }

    .package {
      height: 126px;
      background: #fff;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
      padding: 0 30px;
      margin-bottom: 44px;
    }

    .tool {
      .content {
        padding: 25px 20px;
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        color: #757575;

        > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 88px;
          margin-bottom: 24px;

          &:nth-child(4n) {
            margin-right: 0;
          }

          .icon {
            width: 88px;
            height: 88px;
            margin-bottom: 14px;
          }
        }
      }
    }

    .msg {
      position: fixed;
      left: 0;
      bottom: calc(147px + env(safe-area-inset-bottom));
      text-align: center;
      width: 100vw;
    }
  }
</style>
