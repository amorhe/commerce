<template>
  <div class="container">
    <div class="grid" v-if="list > 0">
      <div v-for="value in list" :key="value" @click="$router.push('./dryingSheetDetail')">
        <van-image class="sheet_img"
                   src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg"/>
      </div>
    </div>
    <div v-else class="noDiv">
      <van-image class="img" :src="require('@/assets/img/noSheet.png')"></van-image>
      <span>暂无晒单</span>
    </div>
    <goodsSku></goodsSku>
  </div>
</template>

<script>
  import goodsSku from '../../components/goodsSku'

  export default {
    name: 'dryingSheetList',
    components: {
      goodsSku
    },
    data () {
      return {
        list: 10
      }
    }
  }
</script>

<style scoped lang="less">
  .grid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > div {
      width: 370px;
      height: 370px;
      margin-bottom: 10px;
      margin-right: 10px;

      &:nth-child(2n) {
        margin-right: 0;
      }

      .sheet_img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .handle_box {
    height: calc(120px + env(safe-area-inset-bottom));

    .content {
      width: 100vw;
      height: 120px;
      background: #fff;
      position: fixed;
      left: 0;
      bottom: 0;
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
</style>
