<template>
  <TopBar> </TopBar>
  <router-view></router-view>
  <!-- <testPage></testPage> -->
</template>

<script setup>
// import testPage from './components/testPage.vue';
import TopBar from './components/common/TopBar.vue'
</script>
<style scoped lang="less">
.test {
  color: red;

  .innerTest {
    color: blue;
  }
}
</style>
