<template>
  <div class="container">
    <van-field type="tel" v-model="phone" placeholder="请输入绑定微信手机号"/>
    <van-field v-model="name" placeholder="请输入微信认证真实姓名"/>
    <van-field
      v-model="code"
      center
      placeholder="请输入短信验证码"
    >
      <template #extra>
        <span class="sendSms">获取验证码</span>
      </template>
    </van-field>
    <div class="msg colorSm">请确保您的微信手机号可接收转账，您可以前往“我”>“支付”>“…”开启“允许通过手机号转账”</div>
    <van-button class="handle_btn" color="#F15663">绑定微信手机号</van-button>
  </div>
</template>

<script>
  export default {
    name: 'bindChat',
    data () {
      return {
        phone: '',
        name: '',
        code: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .sendSms {
    color: #3361C2;
  }

  .msg {
    padding: 25px 30px;
  }

  .handle_btn {
    height: 100px;
    width: 690px;
    margin: 83px 30px;
  }
</style>
