<template>
  <div class="container">
    <div class="content">
      <div class="input">
        <van-field v-model="value" placeholder="请输入兑换码" input-align="center"/>
      </div>
      <van-button class="btn" color="#F15663">确定</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vipExchange',
    data () {
      return {
        value: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    padding: 0 30px;

    .input {
      border-bottom: 1px #F0F4F6 solid;
    }

    .btn {
      width: 100%;
      height: 100px;
      margin-top: 110px;
    }
  }
</style>
