<template>
  <div class="container">
    <div class="list">
      <div class="item flex">
        <div>
          <div class="fontTitle title lineMany">鲁花 食用油 低芥酸特香菜籽油 6.18L</div>
          <span class="colorSm">2021.01.15 14:30:52</span>
        </div>
        <div>
          <div class="fontTitle add">+3</div>
          <span class="colorSm">自购收益</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tradeDetails'
  }
</script>

<style scoped lang="less">
  .list {
    padding: 0 30px;

    .item {
      height: 162px;
      border-bottom: 1px #F0F4F6 solid;

      .title {
        width: 565px;
        -webkit-line-clamp: 2;
      }

      .add {
        color: #F15663;
      }
    }
  }
</style>
