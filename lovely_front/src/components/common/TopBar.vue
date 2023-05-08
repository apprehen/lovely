<template>
  <div class="topBar">
    <div class="logo">
      <img src="@/assets/imgs/sitimgs/sit.png" alt="月晕の网站">
      <div class="logoName">月晕</div>
    </div>
    <div class="rightIcons">
      <div v-for="(item, index) in  topBarDataList " class="rightNav" @click="changeRouter(item.path)"
        :class="{ active: currentPath == item.path }">
        <i class="iconfont" :class="item.icon"></i>
        <div class="content">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const currentPath = ref('/')
const topBarDataList = ref([
  { name: '首页', icon: 'icon-shouye', path: '/' },
  { name: '聊天', icon: 'icon-chat', path: '/Chat' },
  { name: '图片', icon: 'icon-Picture', path: '/Pic' },
  { name: '视频', icon: 'icon-ue744yklive', path: '/Video' },
  { name: '表情', icon: 'icon-biaoqingbao', path: '/Emoji' }
])

const changeRouter = (path) => {
  // console.log(path)
  currentPath.value = path
  console.log(currentPath.value)
  router.push(path)
}

</script>
<style scoped lang='less'>
.topBar {
  width: 100%;
  height: 50px;
  // background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 8%;
    height: 100%;
    text-align: center;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 40px;
      height: 40px;
    }

    .logoName {
      margin-top: 3px;
      margin-left: 10px;
      color: #4c4948;
      font-weight: 700;
      height: 100%;
    }
  }

  .rightIcons {
    width: 50%;
    // background-color: #bfa;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .rightNav {
      display: flex;
      justify-content: center;
      font-size: 25px;
      align-items: center;
      cursor: pointer;
      padding: 6px 8px;
      border-radius: 6px;
      color: #4c4948;
      font-weight: 700;
      

      // color: #fff;
      &:hover {
        background-color: #3b70fc;
        color: #fff;
        box-shadow: 0 8px 12px -3px #4259ef23;
        transition: 0.3s;

        .iconfont {
          color: #fff;
        }

        .content {
          color: #fff !important;
        }
      }

      .content {
        color: #4c4948;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
        font-size: 20px;
        margin-left: 5px;
      }

      .iconfont {
        font-size: 25px;
      }
    }
  }
}

.active {
  background-color: #3b70fc;
  color: #fff;
  box-shadow: 0 8px 12px -3px #4259ef23;

  .iconfont {
    color: #fff;
  }

  .content {
    color: #fff !important;
  }
}
</style>