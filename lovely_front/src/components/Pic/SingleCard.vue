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
  background-color: red;
  .imgs{
    width: 100%;
    img{
      width: 100%; 
    }
  }
  .info{
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
}
</style>