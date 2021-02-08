<template>
  <van-popup
    :value="show"
    position="bottom"
    @click-overlay="cancel">
    <div class="pop_content">
      <div class="flexAlign info_content">
        <van-image class="cover"
                   src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg"></van-image>
        <div class="info">
          <div class="flexAlign">
            <span class="fontTitle title">农夫山泉17.5°苹果 阿克苏苹果12粒…</span>
            <van-icon @click="cancel" class="close" name="cross"/>
          </div>
          <span class="broMsg">9元会员消费返现</span>
        </div>
      </div>
      <div class="flex info_num">
        <div>
          <span class="fontTitle">数量</span>
          <span class="msg">此商品无限购数量</span>
        </div>
        <van-stepper disable-input button-size="22" v-model="value"/>
      </div>
      <div class="info_sku">
        <div class="fontTitle">套餐</div>
        <div class="sku_ul">
          <div :class="skuIndex === index ? 'active': ''" class="sku_li" v-for="(item,index) in 6" :key="index"
               @click="choose_sku(index)">阿克苏苹果 15个装
            单果径约75-79mm
          </div>
        </div>
      </div>
      <van-button class="buy" color="#F15663" block @click="goConfirm">59.90元，立即购买</van-button>
    </div>
  </van-popup>
</template>

<script>
  export default {
    name: 'goodsSku',
    props: ['show'],
    data () {
      return {
        value: 1,
        skuIndex: 0
      }
    },
    methods: {
      cancel () {
        this.$emit('change', false)
      },
      choose_sku (i) {
        this.skuIndex = i
      },
      goConfirm () {
        this.$router.push('./confirmOrder')
      }
    }
  }
</script>

<style scoped lang="less">
  .pop_content {
    .info_content {
      padding: 50px 30px;
      border-bottom: 1px #F0F4F6 solid;

      .cover {
        width: 120px;
        height: 120px;
        margin-right: 20px;
      }

      .info {
        display: flex;
        flex-direction: column;

        .title {
          width: 494px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-right: 30px;
          font-weight: bold;
        }

        .close {
          font-size: 28px;
          font-weight: bold;
        }

        .broMsg {
          margin-top: 13px;
          color: #757575;
        }
      }
    }

    .info_num {
      padding: 48px 0;
      margin: 0 30px;
      border-bottom: 1px #F0F4F6 solid;

      .msg {
        color: #757575;
        margin-left: 15px;
      }
    }

    .info_sku {
      padding: 44px 30px;

      .sku_ul {
        padding: 15px 0;

        .sku_li {
          height: 63px;
          padding: 0 20px;
          margin-bottom: 10px;
          border: 1px solid #F0F4F6;
          font-weight: bold;
          line-height: 63px;

          &.active {
            background-image: url('../assets/img/sku_active.png');
            background-position: 0 0;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            color: #F15663;
            border: 1px solid transparent;
          }
        }
      }
    }

    .buy {
      font-size: 28px;
      font-weight: bold;
    }
  }
</style>
