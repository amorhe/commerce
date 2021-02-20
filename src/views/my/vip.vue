<template>
  <div class="container">
    <div class="headerBox">
      <div class="headerTag flex">
        <span :class="active === 0 ? 'active' : ''" @click="tagClick(0)">购买</span>
        <span :class="active === 1 ? 'active' : ''" @click="tagClick(1)">分享</span>
        <span :class="active === 2 ? 'active' : ''" @click="tagClick(2)">晒单</span>
      </div>
      <van-swipe class="show_box" :show-indicators="false" :touchable="false" :initial-swipe="active">
        <van-swipe-item>
          <div class="content">
            <div class="title">自行购买</div>
            <span>成为会员后。用户在会员期间，购买平台任意商品，均可获得消费返现。交易完成后即可到账</span>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="content">
            <div class="title">分享好友购买</div>
            <span>成为会员后，分享至好友购买并交易完成、好友状态下完成交易均获得全额返现。非会员仅获得80%奖励</span>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="content">
            <div class="title">晒单用户购买</div>
            <span>成为会员后，购买完成后晒单，用户通过您的晒单并完成交易后，获得全额返现。非会员仅获得80%奖励</span>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="main_body">
      <div class="package flex">
        <div class="flexAlign">
          <van-image class="avatar"
                     src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=306152466,1066631514&fm=11&gp=0.jpg"
                     round
          ></van-image>
          <span class="msg">您还不是xx会员</span>
        </div>
        <div class="flexAlign">
          <span class="colorSm mr">详情</span>
          <van-icon class="colorSm" name="arrow"/>
        </div>
      </div>
      <div class="vip_activity">
        <span class="fontTitle">会员活动</span>
        <div class="activity_box">
          <span class="fontTitle">赠送好友15天会员</span>
          <span>会员赠送成功后您会获得10天会员。已赠送10人</span>
        </div>
      </div>
      <div>
        <span class="fontTitle">开通会员</span>
        <div class="flex open_vip">
          <div class="open_item active">
            <span class="title">30天会员</span>
            <div class="discount_price">
              <span>¥</span>
              <span class="num">18</span>
            </div>
            <span class="old_price">¥20</span>
          </div>
          <div class="open_item">
            <span class="title">90天会员</span>
            <div class="discount_price">
              <span>¥</span>
              <span class="num">45</span>
            </div>
            <span class="old_price">¥60</span>
          </div>
          <div class="open_item">
            <span class="title">365天会员</span>
            <div class="discount_price">
              <span>¥</span>
              <span class="num">168</span>
            </div>
            <span class="old_price">¥240</span>
          </div>
        </div>
      </div>
      <div class="colorSm">
        <div>1.本产品为虚拟内容服务，开通后将无法退款，请您理解。</div>
        <div>2.支付完成后，服务将在5分钟内生效。</div>
      </div>
    </div>
    <div class="handle_vip">
      <div class="content flex">
        <van-button class="l btn" color="#494B5D">兑换会员</van-button>
        <van-button class="r btn" color="#F15663">立即开通</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vip',
    data () {
      return {
        active: 0
      }
    },
    methods: {
      tagClick (i) {
        this.active = i
      }
    }
  }
</script>

<style scoped lang="less">
  .headerBox {
    width: 750px;
    height: 320px;
    background-image: url("~@/assets/img/vip_bt_bg.png");
    background-position: 0 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: #fff;
    position: relative;

    .headerTag {
      height: 88px;
      padding: 0 140px;
      font-size: 28px;
      font-weight: bold;
      display: flex;
      align-items: center;

      > span {
        height: 100%;
        line-height: 88px;
        border-bottom: 3px transparent solid;
        box-sizing: border-box;

        &.active {
          border-bottom: 3px #ffffff solid;
        }
      }
    }

    .show_box {
      width: 690px;
      height: 200px;
      position: absolute;
      left: 30px;
      bottom: 0;
      background-image: url("~@/assets/img/vip_bg.png");
      background-position: 0 0;
      background-size: 100% 100%;
      background-repeat: no-repeat;

      .content {
        height: 100%;
        padding: 0 30px 0 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title {
          color: #F4CFA4;
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
    }
  }

  .main_body {
    padding: 0 30px;

    .package {
      width: 690px;
      height: 126px;
      background: #fff;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
      padding: 0 30px;
      margin: 50px 0 44px;
      box-sizing: border-box;

      .avatar {
        width: 60px;
        height: 60px;
        margin-right: 20px;
      }

      .msg {
        font-weight: bold;
      }
    }

    .vip_activity {
      .activity_box {
        margin: 20px 0 44px;
        height: 170px;
        background: #3361C2;
        color: #fff;
        padding: 0 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }

  .open_vip {
    margin: 24px 0;

    .open_item {
      width: 210px;
      height: 224px;
      background: #F9FAF9;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.active {
        background: rgba(241, 86, 99, .1);
        color: #F15663;
      }

      .title {
        color: #101010;
        font-weight: bold;
      }

      .discount_price {
        font-weight: bold;

        .num {
          font-size: 50px;
        }
      }

      .old_price {
        color: #757575;
        font-size: 18px;
        font-weight: bold;
        text-decoration: line-through;
      }
    }
  }

  .handle_vip {
    height: calc(120px + env(safe-area-inset-bottom));
    padding-bottom: env(safe-area-inset-bottom);

    .content {
      width: 750px;
      height: calc(120px + env(safe-area-inset-bottom));
      padding: 0 20px;
      padding-bottom: env(safe-area-inset-bottom);
      box-sizing: border-box;
      position: fixed;
      left: 0;
      bottom: 0;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
      background: #fff;

      .btn {
        height: 80px;
        font-size: 22px;
      }

      .l {
        width: 200px;
      }

      .r {
        width: 500px;
      }
    }
  }
</style>
