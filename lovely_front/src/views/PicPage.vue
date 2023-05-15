<template>
  <div class="imgs-wrapper">
    <div class="imgs-page">
      <div
        v-for="(imgData, index) in imgDataArr"
        :key="index"
        class="imgs-item"
        ref="imgsItem"
      >
        <SingleCard
          :imgSrc="imgData.imgSrc"
          :info="imgData.info"
          @load="handleImageLoaded(index)"
          :handleImageLoaded="handleImageLoaded(index)"
        ></SingleCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import SingleCard from '@/components/Pic/SingleCard.vue'
import { ref } from 'vue'
// 实现瀑布流
// 定义多少列 宽度是多少 gap 是 多少
const columns = ref(4)
const columnWidth = ref(250)
const gap = ref(5)
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
  }
])

const initLayout = () => {
  console.log(imgDataArr.value)
}

const handleImageLoaded = (index) => {
  console.log(index)
  console.log(columnWidth)
  console.log(columns)
  console.log(gap)
  initLayout()
}
</script>
<style scoped lang="less">
.imgs-wrapper {
  // width: 100%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  .imgs-page {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .imgs-item {
      position: absolute;
      width: 250px;
      margin: 5px;
    }
  }
}
</style>
