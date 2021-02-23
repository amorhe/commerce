<template>
  <div class="container">
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
    <div class="goods_box">
      <div class="flex">
        <van-image class="img" src="https://img.yzcdn.cn/vant/apple-1.jpg"></van-image>
        <div>
          <div class="lineOne title">农夫山泉17.5°苹果 阿克苏苹果12粒 果径90-94mm…</div>
          <span class="colorSm">2839人已购买</span>
        </div>
      </div>
    </div>
    <div class="appraise">
      <div class="fontTitle txt">
        一开箱就闻到一股浓浓的苹果香，摸起来冰冰的，保鲜着呢，一周前不小心买了一次去年的陈苹果，那叫一个难受，又粉又干，最后五个一个煮，直接喝苹果水，今天刚煮完，逢生鲜半价，大胆买了这个销量很高的大牌货，不出所望，虽然还没开吃，已经想象出脆甜脆甜的感觉了。吃完追平！
      </div>
      <div class="flex colorSm">
        <span>382人已浏览</span>
        <span>2021.01.18 15:32:41</span>
      </div>
    </div>
    <goodsSku></goodsSku>
  </div>
</template>

<script>
  import goodsSku from '../../components/goodsSku'

  export default {
    name: 'dryingSheetDetail',
    components: { goodsSku },
    data () {
      return {
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        swipeCurrent: 0
      }
    },
    methods: {
      onChange (index) {
        this.swipeCurrent = index
      }
    }
  }
</script>

<style scoped lang="less">
  .swipeWrapper {
    height: 603px;
    margin-top: 3px;

    .imgClass {
      height: 563px;
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

  .goods_box {
    padding: 50px 30px;
    border-bottom: 12px #F9FAF9 solid;

    > div {
      width: 690px;
      height: 100px;
      background: #FFFFFF;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);

      .img {
        width: 100px;
        height: 100px;
      }

      .title {
        width: 570px;
        font-weight: bold;
      }
    }
  }

  .appraise {
    padding: 0 30px;

    .txt {
      padding: 46px 0;
      border-bottom: 1px #F0F4F6 solid;
      margin-bottom: 25px;
    }
  }
</style>
