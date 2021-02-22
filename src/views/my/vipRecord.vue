<template>
  <div class="container">
    <div class="list">
      <div class="flex listItem">
        <div class="flexAlign">
          <van-image class="img" round
                     src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=306152466,1066631514&fm=11&gp=0.jpg"></van-image>
          <div>
            <div class="fontTitle">购买30天会员</div>
            <span class="colorSm">2021.01.15 14:30:52</span>
          </div>
        </div>
        <div class="fontWeight">
          <span>+</span>
          <span class="time">30</span>
          <span>天</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vipRecord'
  }
</script>

<style scoped lang="less">
  .list {
    padding: 0 30px;

    .listItem {
      border-bottom: 1px #F0F4F6 solid;
      height: 176px;

      .img {
        width: 80px;
        height: 80px;
        margin-right: 20px;
      }

      .time {
        font-size: 40px;
      }
    }
  }
</style>
