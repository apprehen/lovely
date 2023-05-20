<template>

<div class="imgs-wrapper">
  <div class="imgs">
    <img :src="imgSrc" alt="" @load="changeCount">
  </div>
  <div class="info">
    {{ info }}
  </div>
</div>

</template>

<script setup>
import { useImgsStore } from '@/stores/imgs.js'

const store = useImgsStore()
// console.log(store.count++)
defineProps({
  imgSrc: {
    type: String,
    default: ''
  },
  info: {
    type: String,
    default: ''
  }
})
const changeCount = ()=>{
  store.count++
}
</script>
<style scoped lang='less'>
.imgs-wrapper{
  width: 250px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  // 添加阴影
  box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
  .imgs{
    width: 100%;
    img{
      width: 100%; 
      border-radius: 8px;
    }
  }
  .info{
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    font-family: 'CommonYueyun';
  }
}
</style>