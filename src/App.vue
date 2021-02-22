<template>
  <div id="app">
    <keep-alive>
      <!-- 需要缓存的视图组件 -->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不需要缓存的视图组件 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!--    tabbar -->
    <van-tabbar route safe-area-inset-bottom placeholder v-if="$route.meta.showTab" v-model="active"
                active-color="#F15663" inactive-color="#747474">
      <van-tabbar-item replace to="/">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? require('@/assets/img/home_active.png') : require('@/assets/img/home.png')"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? require('@/assets/img/my_active.png') : require('@/assets/img/my.png')"/>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 0
      }
    }
  }
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-underline: none;
  }

  button {
    font-weight: bold;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #101010;
    font-size: 22px;
    font-family: PingFangSC-Regular, PingFang SC;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flexAlign {
    display: flex;
    align-items: center;
  }

  .fontTitle {
    font-size: 28px;
    font-weight: bold;
  }

  .fontWeight {
    font-weight: bold;
  }

  .lineOne {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .lineMany {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .fontSimple {
    font-size: 16px;
  }

  .colorSm {
    color: #757575;
  }

  .mr {
    margin-right: 15px;
  }

  .van-tabbar--fixed {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  }

  .van-stepper__input {
    background-color: #fff;
  }
</style>
