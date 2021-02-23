<template>
  <div class="container">
    <van-sticky>
      <div class="tabContent flex">
        <div :class="current === 0 ? 'active' : ''" @click="tabClick(0)">商品</div>
        <div :class="current === 1 ? 'active' : ''" @click="tabClick(1)">晒单</div>
        <div :class="current === 2 ? 'active' : ''" @click="tabClick(2)">详情</div>
      </div>
    </van-sticky>
    <div id="anchor0"></div>
    <van-swipe class="swipeWrapper" @change="onChange" :autoplay="3000">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <van-image class="imgClass" lazy-load :src="item"></van-image>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          <div :class="swipeCurrent === index ? 'active':''" class="slot_div" v-for="(item, index) in images"
               :key="index"></div>
        </div>
      </template>
    </van-swipe>
    <div class="goods_info">
      <span>2839人已购买</span>
      <div class="title">农夫山泉17.5°苹果 阿克苏苹果12粒 果径90-94mm 新鲜水果礼盒</div>
    </div>
    <div class="goods_sales flex">
      <div>
        <div>
          <span>¥</span>
          <span class="money">3</span>
        </div>
        <span>会员自购</span>
      </div>
      <div>
        <div>
          <span>¥</span>
          <span class="money">2</span>
        </div>
        <span>分享他购</span>
      </div>
      <div>
        <div>
          <span>¥</span>
          <span class="money">3</span>
        </div>
        <span>晒单购买</span>
      </div>
    </div>
    <div class="goods_menu">
      <van-cell is-link>
        <template #title>
          <span class="custom-title">返现说明</span>
          <span class="custom-msg">以上均为最高返现情况</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <span class="custom-title">平台服务</span>
          <span class="custom-msg">全场包邮、正品保证、不支持七天无理由退换</span>
        </template>
      </van-cell>
    </div>
    <div id="anchor1"></div>
    <div class="grid">
      <div v-for="value in 10" :key="value" @click="$router.push('./dryingSheetDetail')">
        <van-image class="sheet_img"
                   src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg"/>
      </div>
    </div>
    <div class="checkAll" @click="$router.push('./dryingSheetList')">查看全部33个晒单</div>
    <div id="anchor2"></div>
    <div class="info"></div>
    <goodsSku></goodsSku>
  </div>
</template>

<script>
  import goodsSku from '../../components/goodsSku'

  export default {
    name: 'detail',
    components: { goodsSku },
    data () {
      return {
        current: 0,
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        swipeCurrent: 0
      }
    },
    methods: {
      tabClick (index) {
        this.current = index
        document.querySelector('#anchor' + index).scrollIntoView({ behavior: 'smooth' })
      },
      onChange (index) {
        this.swipeCurrent = index
      }
    }
  }
</script>

<style scoped lang="less">
  .van-cell {
    line-height: 80px;
    align-items: center;
  }

  .tabContent {
    height: 86px;
    padding: 0 140px;
    color: #757575;
    font-size: 28px;
    background: #fff;

    > div {
      height: 100%;
      line-height: 86px;
      border-bottom: 3px transparent solid;

      &.active {
        color: #101010;
        font-weight: bold;
        border-color: #F15663;
      }
    }
  }

  .swipeWrapper {
    height: 790px;
    margin-top: 3px;

    .imgClass {
      height: 750px;
    }

    .slot_div {
      width: 10px;
      height: 10px;
      background: #D8D8D8;
      margin-right: 10px;

      &:nth-last-child(1) {
        margin-right: 0
      }

      &.active {
        background: #101010;
      }
    }

    .custom-indicator {
      width: 100vw;
      height: 10px;
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .goods_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 44px 0 48px;
    color: #757575;
    padding: 0 30px;
    box-sizing: border-box;

    .title {
      font-size: 28px;
      font-weight: bold;
      color: #101010;
      text-align: center;
    }
  }

  .goods_sales {
    width: 690px;
    height: 172px;
    background: #FFFFFF;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
    margin: 0 auto 50px;
    color: #757575;
    padding: 0 60px;
    box-sizing: border-box;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      > div {
        color: #101010;
        font-size: 28px;
        font-weight: bold;
        line-height: 40px;

        .money {
          font-size: 40px;
        }
      }
    }
  }

  .goods_menu {
    border-top: 12px #F9FAF9 solid;
    border-bottom: 12px #F9FAF9 solid;
    margin-bottom: 10px;

    .custom-title {
      font-weight: bold;
      margin-right: 15px;
    }

    .custom-msg {
      color: #757575;
      font-size: 22px;
    }
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > div {
      width: 243px;
      height: 243px;
      margin-bottom: 10px;
      margin-right: 10px;

      &:nth-child(3n) {
        margin-right: 0;
      }

      .sheet_img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .checkAll {
    padding: 44px 0;
    width: 100%;
    text-align: center;
    color: #3361C2;
    font-weight: 600;
  }

  .info {
    border-top: 12px #F9FAF9 solid;
  }

</style>
