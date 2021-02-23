<template>
  <div class="container">
    <div class="content">
      <span class="title">手机号快捷登录/注册</span>
    </div>
    <van-field
      class="fontTitle"
      v-model="phone"
      placeholder="请输入手机号"
    >
      <template #left-icon>
        <span class="colorSm ml">+86</span>
      </template>
      <template #extra>
        <span class="fontTitle">发送验证码</span>
      </template>
    </van-field>
    <van-field
      class="fontTitle"
      v-model="code"
      placeholder="请输入验证码"
    />
    <van-button class="handle_button">进入xx</van-button>
    <div class="colorSm msg">验证码输入错误5次后，请稍后尝试</div>
  </div>
</template>

<script>
  export default {
    name: 'LoginRegister',
    data () {
      return {
        phone: '',
        code: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    padding: 100px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 40px;
      font-weight: bold;
    }
  }

  .ml {
    margin-right: 26px;
  }

  .handle_button {
    width: 690px;
    height: 100px;
    background: #F9FAF9;
    margin: 70px 30px 26px;
    border: none;
    color: #757575;
    &.active {
      background: #F15663;
      color: #fff;
    }
  }

  .msg {
    text-align: center;
  }
</style>
