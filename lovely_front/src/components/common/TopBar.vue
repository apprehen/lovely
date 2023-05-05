<template>
  <div class="topBar">
    <div class="logo">LOGO</div>
    <div class="rightIcons">
      <div v-for="(item, index) in  topBarDataList " class="rightNav">
        <i class="iconfont" :class="item.icon"></i>
        <div class="content">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const topBarDataList = ref([
  { name: '首页', icon: 'icon-shouye', path: '/' },
  { name: '聊天', icon: 'icon-chat', path: '/Chat' },
  { name: '图片', icon: 'icon-Picture', path: '/Pic' },
  { name: '视频', icon: 'icon-ue744yklive', path: '/Video' },
  { name: '表情', icon: 'icon-biaoqingbao', path: '/Emoji' }
])

</script>
<style scoped lang='less'>
.topBar {
  width: 100%;
  height: 50px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 12%;
    height: 100%;
    background-color: #fff;
    text-align: center;
    line-height: 50px;
  }

  .rightIcons {
    width: 50%;
    background-color: #bfa;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .rightNav {
      display: flex;
      justify-content: center;
      font-size: 25px;
      align-items: center;
      // color: #fff;

      .content {
        font-size: 20px;
        margin-left: 5px;
      }

      .iconfont {
        font-size: 25px;
      }
    }
  }
}
</style>