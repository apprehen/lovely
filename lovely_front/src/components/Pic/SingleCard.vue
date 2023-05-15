<template>

<div class="imgs-wrapper">
  <div class="imgs">
    <img :src="imgSrc" alt="" @load="test">
  </div>
  <div class="info">
    {{ info  }}
  </div>
</div>

</template>

<script setup>
import {ref} from 'vue'
const props = defineProps({
  imgSrc: {
    type: String,
    default: ''
  },
  info: {
    type: String,
    default: ''
  }
})
const height = ref(0)
const test = ()=>{
  const img = new Image()
  img.src = props.imgSrc
  img.onload = () => {
    // console.log(img.width, img.height)
    height.value = img.height * 250 / img.width
    console.log(height.value)
  }
}

</script>
<style scoped lang='less'>
.imgs-wrapper{
  width: 250px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;

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