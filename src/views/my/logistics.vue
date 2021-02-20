<template>
  <div class="container">
    <div class="orderStatus statusActive">
      <span class="fontTitle mB">陈先生，18522222222</span>
      <span class="colorSm">四川省 成都市 高新区新希望国际B座29楼</span>
    </div>
    <div class="logisticsBox flex">
      <div>
        <span class="fontTitle mr">顺丰速运</span>
        <span class="colorSm">SF2736191203</span>
      </div>
      <van-button class="btn" color="#494B5D">复制单号</van-button>
    </div>
    <div class="logisticsList">
      <van-steps direction="vertical" :active="0" active-color="#F15663" inactive-color="#494B5D">
        <van-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'logistics'
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
      background: #F9FAF9;
    }

    .mB {
      margin-bottom: 10px;
    }
  }

  .logisticsBox {
    height: 160px;
    padding: 0 30px;
    border-bottom: 12px #F9FAF9 solid;

    .btn {
      height: 60px;
      font-size: 22px;
    }
  }

  .logisticsList {
    padding: 30px;
  }
</style>
