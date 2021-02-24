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
      <div class="package flex" @click="$router.push('./wallet')">
        <div>
          <span class="mr fontTitle">钱包</span>
          <span class="colorSm">累计收益6720.28元</span>
        </div>
        <van-icon class="colorSm" name="arrow"/>
      </div>
      <div class="tool">
        <div class="fontTitle">我的工具</div>
        <div class="content">
          <div @click="$router.push('./addressList')">
            <van-image class="icon" :src="require('@/assets/img/tool1.png')"></van-image>
            <span>地址管理</span>
          </div>
          <div @click="$router.push('./shareFriend')">
            <van-image class="icon" :src="require('@/assets/img/tool2.png')"></van-image>
            <span>分享好友</span>
          </div>
          <div @click="$router.push('./dryingSheetList')">
            <van-image class="icon" :src="require('@/assets/img/tool3.png')"></van-image>
            <span>晒单记录</span>
          </div>
          <div @click="explain = true">
            <van-image class="icon" :src="require('@/assets/img/tool4.png')"></van-image>
            <span>收益说明</span>
          </div>
          <div @click="custom = true">
            <van-image class="icon" :src="require('@/assets/img/tool5.png')"></van-image>
            <span>联系客服</span>
          </div>
          <div @click="wechat = true">
            <van-image class="icon" :src="require('@/assets/img/tool6.png')"></van-image>
            <span>微信公众号</span>
          </div>
        </div>
      </div>
      <div class="colorSm msg">获取佣金消息，请关注微信公众号</div>
    </div>

    <van-popup
      :value="explain"
      position="bottom"
      safe-area-inset-bottom
      @click-overlay="explainCancel">
      <div class="flex modal_top">
        <div></div>
        <div class="fontTitle">收益说明</div>
        <van-icon class="close" @click="explainCancel" name="cross"/>
      </div>
      <div class="explain_body">
        <div>
          <div class="fontTitle title">会员自购</div>
          <div>1.非会员不获得购买返现。会员有效期内获得全额自购返现。购买商品时，会判断您的会员状态进行返现</div>
          <div>2.交易订单过程中，返现金额进入「未结算」金额。交易完成后，返现金额进入「可提现」金额中。交易订单产生退款后，平台将扣除返现金额；收益情况请在「我的」>「钱包」中查询</div>
        </div>
        <div>
          <div class="fontTitle title">分享他购</div>
          <div>1.非会员获得80%分享返现。会员有效期内获得全额分享返现。用户购买商品时，会判断您的会员状态进行返现</div>
          <div>
            2.将商品分享至好友，好友订单交易完成后，好友会成为您的分享好友。分享好友绑定期间产生的所有收益，您都可以获得分享返现；分享好友若成为他人分享好友后，您将不获得此好友收益。若您再次分享商品至此好友，好友产品订单交易后，此好友会再次绑定成您的分享好友；分享好友请通过「我的」>「分享好友」中查询绑定情况
          </div>
          <div>3.分享好友交易订单过程中，返现金额进入「未结算」金额。交易完成后，返现金额进入「可提现」金额中。交易订单产生退款后，平台将扣除返现金额；收益情况请在「我的」>「钱包」中查询</div>
        </div>
        <div>
          <div class="fontTitle title">晒单他购</div>
          <div>1.非会员获得80%晒单返现。会员有效期内获得全额晒单返现。用户购买商品时，会判断您的会员状态进行返现</div>
          <div>2.完成订单交易后，进行图文晒单并提交平台审核。晒单审核通过后会显示至商品内，用户通过您在「商品」>「晒单详情」购买商品并完成订单交易后，您会获得晒单收益；晒单内分享海报，会引导用户进入晒单详情。</div>
          <div>3.晒单购买交易订单过程中，返现金额进入「未结算」金额。交易完成后，返现金额进入「可提现」金额中。交易订单产生退款后，平台将扣除返现金额；收益情况请在「我的」>「钱包」中查询</div>
        </div>
      </div>
    </van-popup>
    <van-popup
      :value="custom"
      position="bottom"
      safe-area-inset-bottom
      @click-overlay="customCancel">
      <div class="flex modal_top">
        <div></div>
        <div class="fontTitle">联系客服</div>
        <van-icon class="close" @click="customCancel" name="cross"/>
      </div>
      <div class="custom_box">
        <div class="custom_content flex">
          <div>
            <span class="fontTitle ml">客服微信号</span>
            <span class="colorSm">SF2736191203</span>
          </div>
          <van-button class="btn" color="#494B5D">复制微信</van-button>
        </div>
        <div class="colorSm">添加客服微信失败，请关注官方公众号进行售后等咨询问题</div>
      </div>
    </van-popup>
    <van-popup
      :value="wechat"
      position="bottom"
      safe-area-inset-bottom
      @click-overlay="wechatCancel">
      <div class="flex modal_top">
        <div></div>
        <div class="fontTitle">微信公众号</div>
        <van-icon class="close" @click="wechatCancel" name="cross"/>
      </div>
      <div class="wechat_content">
        <van-image class="img"
                   src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=306152466,1066631514&fm=11&gp=0.jpg"></van-image>
        <span class="colorSm">长按保存二维码</span>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: 'my',
    data () {
      return {
        explain: false,
        custom: false,
        wechat: false
      }
    },
    methods: {
      checkOrders () {
        this.$router.push('./order')
      },
      explainCancel () {
        this.explain = false
      },
      customCancel () {
        this.custom = false
      },
      wechatCancel () {
        this.wechat = false
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
        padding: 25px 0;
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        color: #757575;

        > div {
          width: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
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
      bottom: calc(120px + env(safe-area-inset-bottom));
      text-align: center;
      width: 100vw;
      background: #fff;
      height: 70px;
    }
  }

  .modal_top {
    padding: 0 30px;
    height: 126px;
    border-bottom: 1px #F0F4F6 solid;

    .close {
      font-size: 26px;
      font-weight: bold;
    }
  }

  .explain_body {
    padding: 0 30px;
    max-height: 70vh;
    overflow-y: scroll;

    > div {
      padding: 43px 0;
      border-bottom: 1px #F0F4F6 solid;
      color: #757575;

      .title {
        color: #101010;
      }
    }
  }

  .custom_box {
    padding: 0 30px 46px;

    .custom_content {
      height: 160px;
      border-bottom: 1px #F0F4F6 solid;
      margin-bottom: 24px;

      .ml {
        margin-right: 25px;
      }

      .btn {
        height: 60px;
        font-size: 22px;
      }
    }
  }

  .wechat_content {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .img {
      width: 400px;
      height: 400px;
      margin-bottom: 27px;
    }
  }
</style>
