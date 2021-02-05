<template>
  <div>
    <div class="search_box" @click="$router.push('./search')">
      <van-icon name="search"></van-icon>
      <span class="fontSm">搜索课程名称</span>
    </div>
    <div class="main">
      <div class="main_content" v-for="(item,index) in 6" :key="index" @click="$router.push('./detail')">
        <van-image class="cover" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        <div class="main_body">
          <div class="title fontTitle lineMany">农夫山泉17.5°苹果 阿克苏苹果15个装 果径约我企鹅阿四大卫视</div>
          <div class="flexAlign">
            <div class="share_l">3元会员消费返现</div>
            <div class="share_r">2元分享返现</div>
          </div>
          <div class="flex main_bottom">
            <div class="price_msg">
              <span>¥</span>
              <span class="money">129.00</span>
            </div>
            <span>2839人已购买</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped lang="less">
  .search_box {
    width: 690px;
    margin: 15px auto 30px;
    height: 90px;
    background: #F9FAF9;
    color: #757575;
    display: flex;
    justify-content: center;
    align-items: center;

    > i {
      font-size: 22px;
      margin-right: 28px;
    }
  }

  .main {
    display: flex;
    flex-wrap: wrap;

    .main_content {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid #F0F4F6;
      box-sizing: border-box;

      &:nth-child(2n -1) {
        border-left: none;
      }

      &:nth-child(2n) {
        border-right: none;
      }

      .cover {
        width: 100%;
        height: 375px;
        margin-bottom: 20px;
      }

      .main_body {
        padding: 20px;

        .title {
          font-weight: bold;
          -webkit-line-clamp: 2;
          margin-bottom: 16px;
        }

        .share_l {
          background: #494B5D;
          color: #F4CFA4;
          font-size: 16px;
          font-weight: bold;
          padding: 4px 10px;
          margin-right: 10px;
        }

        .share_r {
          background: #F9FAF9;
          color: #F15663;
          font-size: 16px;
          font-weight: bold;
          padding: 4px 10px;
        }

        .main_bottom {
          margin-top: 20px;
          color: #757575;

          .price_msg {
            color: #F15663;
            font-weight: bold;
            font-size: 18px;

            .money {
              font-size: 28px;
            }
          }
        }
      }
    }
  }
</style>
