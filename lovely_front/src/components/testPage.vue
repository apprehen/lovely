<template>
  <div>
    <!-- {{ yueyunobj.name  }}
  {{ yueyunobj.age  }} -->
    <br />
    <!-- {{ test.name  }}
  {{ test.age  }} -->
    <button @click="change($event, 111)">Click Me</button>
  </div>
  <div v-for="(item, index) in yueyunobj" :key="index">
    {{ item.name }}
    {{ item.age }}
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const yueyunobj = reactive([
  {
    name: 'yueyun',
    age: 18
  },
  {
    name: 'yueyun2',
    age: 19
  }
])
const test = reactive({
  name: 'yueyun',
  age: 18
})
const change = (e, str) => {
  console.log(e, str)
  yueyunobj[0].name = 'yueyun2'
  yueyunobj[1].age = 20
  test.name = 'yueyun2'
  test.age = 19
}
</script>
<style scoped lang="less"></style>
