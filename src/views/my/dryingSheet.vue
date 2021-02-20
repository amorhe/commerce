<template>
  <div class="container">
    <div class="pictureBox">
      <van-uploader v-model="fileList" multiple :max-count="8" :max-size="5 * 1024 * 1024" @oversize="onOversize"
                    :before-read="beforeRead"/>
    </div>
    <div class="msg">
      <van-field
        v-model="message"
        autosize
        type="textarea"
        maxlength="1000"
        placeholder="分享您的购买体验，用户通过您的晒单购买后，均可产生收益"
        show-word-limit
      />
    </div>
    <div class="handle_sheet">
      <div class="handle_content">
        <div class="down">订单下架</div>
        <van-button class="btn" color="#3361C2">发布</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'vant'

  export default {
    name: 'dryingSheet',
    data () {
      return {
        fileList: [],
        message: ''
      }
    },
    methods: {
      // 返回布尔值
      beforeRead (file) {
        if (file.type !== 'image/jpeg') {
          Toast('请上传正确的格式图片')
          return false
        }
        return true
      },
      onOversize (file) {
        console.log(file)
        Toast('文件大小不能超过 5M')
      }
    }
  }
</script>

<style scoped lang="less">
  .pictureBox {
    padding: 0 20px 60px;
    border-bottom: 12px #F9FAF9 solid;
  }

  .msg {
    padding: 25px 10px;
  }

  .handle_sheet {
    height: 135px;
    padding-bottom: env(safe-area-inset-bottom);

    .handle_content {
      width: 100vw;
      height: 205px;
      padding-bottom: env(safe-area-inset-bottom);
      position: fixed;
      left: 0;
      bottom: 0;

      .down {
        color: #F15663;
        font-weight: bold;
        text-align: center;
      }

      .btn {
        width: 690px;
        height: 100px;
        margin: 45px 30px;
        font-size: 28px;
      }
    }
  }
</style>
