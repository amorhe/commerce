<template>
  <div class="container">
    <div class="address_content flex" @click="chooseTrick">
      <span class="fontTitle">选择收货地址</span>
      <van-icon name="arrow"/>
    </div>
    <div class="address_content flex" @click="chooseTrick">
      <div>
        <span class="fontTitle">陈先生，18522222222</span>
        <span class="colorSm">四川省 成都市 高新区新希望国际B座29楼</span>
      </div>
      <van-icon name="arrow"/>
    </div>
    <div class="address_bt_bg"></div>
    <div class="goods_container flex">
      <van-image class="cover"
                 src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2927530124,2226778037&fm=26&gp=0.jpg"></van-image>
      <div class="content">
        <div class="title fontTitle">农夫山泉17.5°苹果 阿克苏苹果10个 果农夫山泉17.5°苹果</div>
        <div class="title colorSm">阿克苏苹果12粒 果径90-94mm</div>
        <div class="flex">
          <span class="price">¥59.90</span>
          <van-stepper disable-input button-size="22" v-model="value"/>
        </div>
      </div>
    </div>
    <div class="info_list flex">
      <div>售价</div>
      <span>¥59.90</span>
    </div>
    <div class="info_list flex">
      <div>商品件数</div>
      <span>3</span>
    </div>
    <div class="info_list flex noBorder">
      <div>合计</div>
      <span>¥299.00</span>
    </div>
    <div class="agentBack flex">
      <div>
        <span class="mr lf">会员返现</span>
        <span class="colorSm">交易完成后到账</span>
      </div>
      <span>+¥3</span>
    </div>
    <div class="msg_box">因平台特殊性，商品暂不支持七天无理由退换货物，若商品损坏、未及时发货、无法发货等情况下，均可联系客服申请售后服务</div>
    <div class="confirm_pay flex">
      <span class="fontTitle">实付金额：¥59.00</span>
      <van-button class="btn">立即支付</van-button>
    </div>
    <van-popup v-model="show" position="bottom" @click-overlay="cancel" safe-area-inset-bottom>
      <div class="modalAddress">
        <div class="title flex">
          <span class="fontTitle">选择收货地址</span>
          <van-icon @click="cancel" class="close" name="cross"/>
        </div>
        <div class="list">
          <div class="flex">
            <div class="flexAlign">
              <van-image class="icon" :src="require('@/assets/img/address_icon_active.png')"></van-image>
              <span class="fontTitle">陈先生，18522222222</span>
            </div>
            <span>默认地址</span>
          </div>
          <span class="colorSm text">四川省 成都市 高新区新希望国际B座29楼四川省 成都市 高新区新希望国际B座29楼</span>
        </div>
        <div class="list">
          <div class="flex">
            <div class="flexAlign">
              <van-image class="icon" :src="require('@/assets/img/address_icon.png')"></van-image>
              <span class="fontTitle">陈先生，18522222222</span>
            </div>
          </div>
          <span class="colorSm text">四川省 成都市 高新区新希望国际B座29楼</span>
        </div>
        <!--    没有地址    -->
        <!--        <div class="no_address_div">-->
        <!--          <van-image class="icon" :src="require('@/assets/img/no_address.png')"></van-image>-->
        <!--          <span>暂无地址</span>-->
        <!--        </div>-->
        <div class="manager">
          <div>地址管理</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: 'confirmOrder',
    data () {
      return {
        value: 1,
        show: false
      }
    },
    methods: {
      cancel () {
        this.show = false
      },
      chooseTrick () {
        this.show = true
      }
    }
  }
</script>

<style scoped lang="less">
  .address_content {
    height: 165px;
    padding: 0 30px;

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  .address_bt_bg {
    height: 3px;
    width: 100vw;
    background-image: url('~@/assets/img/address_bt_bg.png');
    background-position: 0 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .goods_container {
    border-bottom: 12px #F9FAF9 solid;
    padding: 50px 30px;

    .cover {
      width: 120px;
      height: 120px;
    }

    .content {
      width: 550px;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .price {
        color: #F15663;
        font-weight: bold;
      }
    }
  }

  .info_list {
    width: 690px;
    height: 120px;
    border-bottom: 1px #F0F4F6 solid;
    margin: 0 auto;
    color: #757575;

    &.noBorder {
      border: none;
    }

    > div {
      font-weight: bold;
      color: #101010;
    }
  }

  .agentBack {
    height: 120px;
    color: #757575;
    border-bottom: 12px #F9FAF9 solid;
    border-top: 12px #F9FAF9 solid;
    padding: 0 30px;

    .lf {
      font-weight: bold;
      color: #101010;
    }
  }

  .msg_box {
    margin: 25px 30px;
    width: 690px;
    color: #757575;
  }

  .confirm_pay {
    width: 100vw;
    height: 120px;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 30px;
    box-sizing: border-box;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
    background: #fff;

    .btn {
      height: 60px;
      background: #F15663;
      color: #fff;
      border: none;
      font-size: 22px;
    }
  }

  .modalAddress {
    height: calc(1177px + env(safe-area-inset-bottom));
    overflow-y: scroll;

    .title {
      height: 126px;
      padding: 0 30px;
      border-bottom: 1px #F0F4F6 solid;

      > span {
        margin-left: 258px;
      }

      .close {
        font-weight: bold;
        font-size: 26px;
      }
    }

    .list {
      padding: 0 30px;
      border-bottom: 1px #F0F4F6 solid;
      height: 165px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: bold;

      .icon {
        width: 30px;
        height: 30px;
        margin-right: 28px;
      }

      .text {
        margin-left: 58px;
      }
    }

    .no_address_div {
      height: 916px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 28px;
      font-weight: bold;
      color: #757575;

      .icon {
        width: 200px;
        height: 200px;
        margin-bottom: 40px;
      }
    }

    .manager {
      height: calc(133px + env(safe-area-inset-bottom));

      > div {
        width: 100vw;
        height: 133px;
        border-top: 1px #F0F4F6 solid;
        position: fixed;
        bottom: 0;
        left: 0;
        color: #3361C2;
        font-size: 28px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: env(safe-area-inset-bottom);
      }
    }
  }
</style>
