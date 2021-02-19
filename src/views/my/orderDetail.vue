<template>
  <div class="container">
    <div class="orderStatus statusActive">
      <span class="fontTitle mB">订单待支付</span>
      <span>预计00:12:48后自动关闭订单</span>
    </div>
    <div class="orderStatus">
      <span class="fontTitle mB">陈先生，18522222222</span>
      <span class="colorSm">四川省 成都市 高新区新希望国际B座29楼</span>
    </div>
    <div class="list">
      <div class="content">
        <div class="goods_box flex">
          <van-image class="goods_img"
                     src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=306152466,1066631514&fm=11&gp=0.jpg"></van-image>
          <div class="goods_content">
            <div>
              <div class="lineMany title fontTitle">鲁花 食用油 低芥酸特香菜籽油 6.18L非转基因 物理压榨 新老包装随新老包装随机发新老包装随机发</div>
              <div class="flexAlign colorSm">
                <span class="sku lineOne">一箱装一箱装一箱装一箱装一箱装一箱装一箱装一箱装一箱装一箱装…</span>
                <span>数量X1</span>
              </div>
            </div>
            <span class="price">¥59.90</span>
          </div>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="flex">
        <span class="lg">数量</span>
        <span>1</span>
      </div>
      <div class="flex">
        <span class="lg">售价</span>
        <span>¥299.00</span>
      </div>
      <div class="flex">
        <span class="lg">实付金额</span>
        <span>¥299.00</span>
      </div>
      <div class="flex">
        <span class="lg">会员返现</span>
        <span>+¥2</span>
      </div>
      <div class="flex">
        <span class="lg">创建时间</span>
        <span>2021.01.02 16:03:12</span>
      </div>
      <div class="flex">
        <span class="lg">订单编号</span>
        <span>178926371637612</span>
      </div>
    </div>
    <div class="handle_order">
      <div class="content flex">
        <a class="contract">联系客服</a>
        <div class="flexAlign">
          <van-button class="btn">分享海报</van-button>
          <van-button class="btn" color="#F15663">立即支付</van-button>
          <van-button class="btn" color="#494B5D">查看物流</van-button>
          <van-button class="btn" color="#3361C2">立即晒单</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'orderDetail'
  }
</script>

<style scoped lang="less">
  .orderStatus {
    height: 168px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &.statusActive {
      background: #494B5D;
      color: #fff;
    }

    .mB {
      margin-bottom: 10px;
    }
  }

  .list {
    border-top: 12px #F9FAF9 solid;
    border-bottom: 12px #F9FAF9 solid;

    .content {
      padding: 0 30px;

      .goods_box {
        height: 240px;

        .goods_img {
          width: 180px;
          height: 180px;
          margin-right: 20px;
        }

        .goods_content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          height: 180px;

          .title {
            -webkit-line-clamp: 2;
            margin-bottom: 10px;
          }

          .sku {
            margin-right: 30px;
            width: 386px;
          }

          .price {
            color: #F15663;
            font-weight: bold;
          }
        }
      }
    }
  }

  .details {
    margin-top: 46px;
    padding: 0 30px;
    color: #757575;

    > div {
      margin-bottom: 20px;

      .lg {
        font-weight: bold;
        color: #101010;
      }
    }
  }

  .handle_order {
    height: 120px;
    padding-bottom: env(safe-area-inset-bottom);

    .content {
      width: 100vw;
      height: 120px;
      padding: 0 30px;
      box-sizing: border-box;
      padding-bottom: env(safe-area-inset-bottom);
      position: fixed;
      left: 0;
      bottom: 0;

      .contract {
        color: #3361C2;
      }

      .btn {
        height: 60px;
        font-size: 22px;
        font-weight: bold;
        margin-left: 10px;
      }
    }
  }
</style>
