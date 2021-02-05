<template>
  <div class="container">
    <div class="search_box">
      <van-search class="search" v-model="value" placeholder="搜索感兴趣的商品" show-action>
        <template #action>
          <div class="search_text" @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <div class="search_record">
      <div class="flex">
        <span class="fontTitle">搜索记录</span>
        <span class="clearable">清空</span>
      </div>
      <div class="search_tag">
        <div class="tag">西瓜</div>
        <div class="tag">快乐肥宅水</div>
      </div>
    </div>
    <div class="search_record">
      <div class="flex">
        <span class="fontTitle">为您推荐</span>
      </div>
      <div class="search_tag">
        <div class="tag">西瓜</div>
        <div class="tag">快乐肥宅水</div>
      </div>
    </div>

    <div class="main">
      <div class="main_content" v-for="(item,index) in 1" :key="index" @click="$router.push('./detail')">
        <van-image class="cover" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        <div class="main_body">
          <div class="title fontTitle lineMany">农夫山泉17.5°苹果 阿克苏苹果15个装 果径约我企鹅阿四大卫视</div>
          <div class="flexAlign">
            <div class="share_l">最高返现13元</div>
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

    <div class="noResult">抱歉，没有找到相关课程</div>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        value: ''
      }
    },
    methods: {
      onSearch () {

      }
    }
  }
</script>

<style scoped lang="less">
  .search_box {
    width: 690px;
    margin: 10px 30px;
    background: #F9FAF9;

    .search {
      height: 90px;
    }

    .van-search {
      padding: 0;
    }

    .search_text {
      color: #F15663;
      font-size: 28px;
      font-weight: 600;
    }
  }

  .search_record {
    padding: 45px 0 50px;
    margin: 0 30px;
    border-bottom: 1px #F0F4F6 solid;

    &:nth-child(3) {
      border: none;
    }

    .clearable {
      color: #757575;
    }

    .search_tag {
      display: flex;
      flex-wrap: wrap;
      margin-top: 26px;

      .tag {
        padding: 15px 30px;
        background-color: #F9FAF9;
        margin: 0 10px 10px 0;
      }
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

  .noResult {
    margin-top: 36px;
    width: 100%;
    text-align: center;
    color: #757575;
    font-size: 28px;
  }
</style>
