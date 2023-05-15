<template>
  <div class="imgs-wrapper" ref="imgswrapper">
    <div class="imgs-page" ref="imgsPage" >
      <div
        v-for="(imgData, index) in imgDataArr"
        :key="index"
        class="imgs-item"
        ref="imgsItem"
      >
        <SingleCard
          :imgSrc="imgData.imgSrc"
          :info="imgData.info"
          class="img-item"
        ></SingleCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import SingleCard from '@/components/Pic/SingleCard.vue'
import { ref,watch,computed,onUnmounted,onMounted,onBeforeUnmount } from 'vue'
import { useImgsStore } from '@/stores/imgs.js'
// 实现瀑布流
// 定义多少列 宽度是多少 gap 是 多少
const store = useImgsStore()
const columns = ref(0)
const columnWidth = ref(250)
const gap = ref(10)
const heightArr = ref([])
// dom元素
const imgsPage = ref(null)
const imgswrapper = ref(null)
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
const isShowImg = ref(false)

const timer = ref(null)
// 监听在pinia中图片数据变化
const getCount = computed(()=>{
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
  const leftRightGap = (imgsPage.value.offsetWidth - columns.value * columnWidth.value - (columns.value - 1) * gap.value) / 2
  // 初始化高度数组
  heightArr.value = new Array(columns.value).fill(0)
  // 
  // 绘制图片
  for (let i=0;i<imgsItemArr.length;i++) {
    if (i < columns.value) {
      imgsItemArr[i].style.top = 0
      // imgsItemArr[i].style.left = i * (columnWidth.value + gap.value) + 'px'
      imgsItemArr[i].style.left = leftRightGap + i * (columnWidth.value + gap.value) + 'px'
      console.log(imgsItemArr[i].offsetHeight)
      heightArr.value[i] = imgsItemArr[i].offsetHeight + gap.value
    } else {
      // 找出最小高度和索引
      const minHeight = Math.min(...heightArr.value)
      const minIndex = heightArr.value.findIndex(item => item == minHeight)
      // 计算下一张图的位置
      imgsItemArr[i].style.top = minHeight + gap.value + 'px'
      // imgsItemArr[i].style.left = minIndex * (columnWidth.value + gap.value) + 'px'
      imgsItemArr[i].style.left = leftRightGap + minIndex * (columnWidth.value + gap.value) + 'px'  
      // // 更新高度数组
      heightArr.value[minIndex] += imgsItemArr[i].offsetHeight + gap.value
    }
  }
  imgswrapper.value.style.height = Math.max(...heightArr.value) + 50 + 'px'
  imgsPage.value.style.height = Math.max(...heightArr.value) + 50 + 'px'
  // imgswrapper.value.style.display = 'flex'
}

const onResize = () => {
  if(timer.value){
    clearTimeout(timer.value)
  }
  timer.value = setTimeout(() => {
    handleImageData()
  }, 300);
}

watch(getCount, (value)=>{
  if(value == imgDataArr.value.length) {
    handleImageData()
    isShowImg.value = true
  }
})
// 销毁组件时
onUnmounted(() => {
  store.count = 0
})

onMounted(() => {
  window.addEventListener('resize', onResize);
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
    transition: all .4 ease-in-out;
    overflow: hidden;
    .imgs-item {
      position: absolute;
      width: 250px;
      margin: 10px;
      transition: all .4s ease-in-out;
      .img-item{
        // position: absolute;
        width: 100%;
        transition: all .4s ease-in-out;
      }
    }
  }
}
</style>
