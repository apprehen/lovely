<template>
  <div class="box1">
    <div class="box2"></div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'

</script>
<style scoped lang='less'>
.box1 {
  width: 100%;
  height: 100vh;
  background-color: #ccc;

  .box2 {
    width: 100px;
    height: 100px;
    background-color: #bfa;
  }
}
</style>
