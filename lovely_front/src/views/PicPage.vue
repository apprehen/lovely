<template>
  <div class="imgs-wrapper" ref="imgswrapper">
    <div class="loading-wrapper" ref="loadingWrapper" v-if="isShowImg">
      <div class="loading">
        <div class="loading-inner"></div>
      </div>
    </div>
    <div class="imgs-page" ref="imgsPage">
      <div v-for="(imgData, index) in imgDataArr" :key="index" class="imgs-item" ref="imgsItem">
        <SingleCard :imgSrc="imgData.imgSrc" :info="imgData.info" class="img-item"></SingleCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import SingleCard from '@/components/Pic/SingleCard.vue'
import { ref, watch, computed, onUnmounted, onMounted, onBeforeUnmount } from 'vue'
import { useImgsStore } from '@/stores/imgs.js'
// 实现瀑布流
// 定义多少列 宽度是多少 gap 是 多少
const store = useImgsStore()
const columns = ref(0)
const columnWidth = ref(250)
const gap = ref(10)
const heightArr = ref([])
const isShowImg = ref(true)
// dom元素
const imgsPage = ref(null)
const imgswrapper = ref(null)
const loadingWrapper = ref(null)
// 图片数据
const imgDataArr = ref([
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/1.jpg',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/2.png',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/3.png',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/4.png',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/5.png',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/6.png',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/7.jpg',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/8.jpg',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/9.jpg',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/10.jpg',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/11.jpg',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/12.jpg',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/13.jpg',
    info: '可爱捏'
  },
  {
    imgSrc: '/src/assets/imgs/cartoonimgs/14.jpg',
    info: '可爱捏'
  }
])
const timer = ref(null)
// 监听在pinia中图片数据变化
const getCount = computed(() => {
  return store.count
})

const handleImageData = () => {
  const imgsItemArr = document.querySelectorAll('.imgs-item')
  // 列数
  columns.value = Math.floor(
    (imgsPage.value.offsetWidth + gap.value) / (columnWidth.value + gap.value)
  )
  // 居中
  // 计算左右间距
  const leftRightGap =
    (imgsPage.value.offsetWidth -
      columns.value * columnWidth.value -
      (columns.value - 1) * gap.value) /
    2
  // 初始化高度数组
  heightArr.value = new Array(columns.value).fill(0)
  //
  // 绘制图片
  for (let i = 0; i < imgsItemArr.length; i++) {
    if (i < columns.value) {
      imgsItemArr[i].style.top = 0
      // imgsItemArr[i].style.left = i * (columnWidth.value + gap.value) + 'px'
      imgsItemArr[i].style.left = leftRightGap + i * (columnWidth.value + gap.value) + 'px'
      console.log(imgsItemArr[i].offsetHeight)
      heightArr.value[i] = imgsItemArr[i].offsetHeight + gap.value
    } else {
      // 找出最小高度和索引
      const minHeight = Math.min(...heightArr.value)
      const minIndex = heightArr.value.findIndex((item) => item == minHeight)
      // 计算下一张图的位置
      imgsItemArr[i].style.top = minHeight + gap.value + 'px'
      // imgsItemArr[i].style.left = minIndex * (columnWidth.value + gap.value) + 'px'
      imgsItemArr[i].style.left = leftRightGap + minIndex * (columnWidth.value + gap.value) + 'px'
      // // 更新高度数组
      heightArr.value[minIndex] += imgsItemArr[i].offsetHeight + gap.value
    }
  }
  // imgswrapper.value.style.height = Math.max(...heightArr.value) + 50 + 'px'
  imgsPage.value.style.height = Math.max(...heightArr.value) + 50 + 'px'
  // isShowImg.value = false
  // loadingWrapper.value.style.display = 'none'
}

// 加载动画函数
const loadingFun = () => {
  setTimeout(() => {
    isShowImg.value = false
  }, 300);
}

const onResize = () => {
  if (timer.value) {
    clearTimeout(timer.value)
  }
  timer.value = setTimeout(() => {
    handleImageData()
    loadingFun()
  }, 300)
}

watch(getCount, async (value) => {
  if (value == imgDataArr.value.length) {
    await handleImageData()
    console.log('加载完成')
    loadingFun()
  }
})
// 销毁组件时
onUnmounted(() => {
  store.count = 0
})

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>
<style scoped lang="less">
.imgs-wrapper {
  width: 100%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
  .imgs-page {
    width: 75%;
    position: relative;
    // height: 1000px;
    height: 0;
    transition: all 0.3 ease-in-out;
    overflow: hidden;
    .imgs-item {
      position: absolute;
      width: 250px;
      margin: 10px;
      transition: all 0.4s ease-in-out;
      .img-item {
        // position: absolute;
        width: 100%;
        transition: all 0.4s ease-in-out;
      }
    }
  }
}
// 加载动画
.loading-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 9999;
}

.loading-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  margin-top: -20px;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: #333;
  animation: loading 1s ease-in-out infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
