<template>
  <div class="container">
    <div class="share_content">
      <van-tabs v-model="active" line-width="57">
        <van-tab title="我的好友">
          <div v-if="list > 0">
            <div class="list flex">
              <div class="flexAlign">
                <van-image
                  class="avatar"
                  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=306152466,1066631514&fm=11&gp=0.jpg"
                  round></van-image>
                <div>
                  <div class="fontTitle">都是负担</div>
                  <span class="colorSm">2021.01.15 14:30:52</span>
                </div>
              </div>
              <span class="fontTitle">+304</span>
            </div>
          </div>
          <div v-else class="noDiv">
            <van-image class="img" :src="require('@/assets/img/noFriend.png')"></van-image>
            <span>暂无订单</span>
          </div>
        </van-tab>
        <van-tab title="失效好友">
          <div v-if="list > 0">
            <div class="list flex">
              <div class="flexAlign">
                <van-image
                  class="avatar"
                  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=306152466,1066631514&fm=11&gp=0.jpg"
                  round></van-image>
                <div>
                  <div class="fontTitle">阿谁问我</div>
                  <span class="colorSm">2021.01.15 14:30:52</span>
                </div>
              </div>
              <span class="fontTitle">+93</span>
            </div>
          </div>
          <div v-else class="noDiv">
            <van-image class="img" :src="require('@/assets/img/noFriend.png')"></van-image>
            <span>暂无好友</span>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="share_bottom">
      <div class="content">好友说明请在「我的」>「收益说明」中查询详细内容</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shareFriend',
    data () {
      return {
        active: 0,
        list: 1
      }
    }
  }
</script>

<style scoped lang="less">
  .share_content {
    padding: 0 30px;

    .list {
      height: 179px;
      border-bottom: 1px #F0F4F6 solid;

      .avatar {
        width: 80px;
        height: 80px;
        margin-right: 20px;
      }
    }
  }

  .share_bottom {
    height: calc(122px + env(safe-area-inset-bottom));

    .content {
      width: 100vw;
      height: 122px;
      background: #F9FAF9;
      color: #757575;
      position: fixed;
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
</style>
