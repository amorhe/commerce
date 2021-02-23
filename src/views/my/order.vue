<template>
  <div class="container">
    <div class="tabContent flex">
      <span :class="active === 0 ? 'active' : ''" @click="tabClick(0)">全部</span>
      <span :class="active === 1 ? 'active' : ''" @click="tabClick(1)">待支付</span>
      <span :class="active === 2 ? 'active' : ''" @click="tabClick(2)">待发货</span>
      <span :class="active === 3 ? 'active' : ''" @click="tabClick(3)">待收货</span>
      <span :class="active === 4 ? 'active' : ''" @click="tabClick(4)">待晒单</span>
    </div>
    <div class="main_list">
      <div v-if="list > 0">
        <div class="list" v-for="item in list" :key="item" @click.prevent="checkDetail">
          <div class="content">
            <div class="status_msg colorSm">订单待支付，预计00:12:48后自动关闭订单</div>
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
            <div class="handle_div">
              <van-button class="btn">分享海报</van-button>
              <van-button class="btn" color="#F15663">立即支付</van-button>
              <van-button class="btn" color="#494B5D" @click.stop="$router.push('./logistics')">查看物流</van-button>
              <van-button class="btn" color="#3361C2" @click.stop="$router.push('./dryingSheet')">立即晒单</van-button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="noDiv">
        <van-image class="img" :src="require('@/assets/img/noOrder.png')"></van-image>
        <span>暂无订单</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order',
    data () {
      return {
        active: 0,
        tabs: ['全部', '待支付', '待发货', '待收货', '待晒单'],
        list: 9
      }
    },
    methods: {
      tabClick (index) {
        this.active = index
      },
      checkDetail () {
        this.$router.push('./orderDetail')
      }
    }
  }
</script>

<style scoped lang="less">
  .tabContent {
    padding: 0 77px;
    height: 86px;

    > span {
      font-size: 28px;
      height: 100%;
      line-height: 86px;
      border-bottom: 3px transparent solid;
      box-sizing: border-box;
      color: #757575;

      &.active {
        border-bottom: 3px #F15663 solid;
        font-weight: bold;
        color: #101010;
      }
    }
  }

  .main_list {
    height: calc(100vh - 86px);
    overflow-y: scroll;
    padding-bottom: env(safe-area-inset-bottom);

    .list {
      border-bottom: 12px #F9FAF9 solid;

      &:nth-child(1) {
        border-top: 12px #F9FAF9 solid;
      }

      .content {
        padding: 0 30px;

        .status_msg {
          line-height: 80px;
          border-bottom: 1px #F0F4F6 solid;
        }

        .goods_box {
          height: 240px;
          border-bottom: 1px #F0F4F6 solid;

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

        .handle_div {
          padding: 30px 0;
          display: flex;
          justify-content: flex-end;

          .btn {
            height: 60px;
            font-size: 22px;
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>
