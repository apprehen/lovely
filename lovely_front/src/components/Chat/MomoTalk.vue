<template>
  <div class="momoTalk">
    <div class="momoTalk-top">
      <svg data-v-dc02fb85="" xmlns="http://www.w3.org/2000/svg"
        id="Layer_2_00000033347787382183846980000016369978894466167968_" x="0" y="0" viewBox="0 0 512 477.9">
        <path data-v-dc02fb85=""
          d="M101.8 396.4c-53.3 0-98.4 53.8-101.8 79.5 81.4 7.9 196.1-6.8 252.1-65-74.7 13.5-135.9-5.2-150.3-14.5zM281.4 412.5c55.1 73.3 137.7 58.5 230.5 63.3 3.5-42.1-73.2-80.9-103.9-82.2-39.9 28.5-123.3 19.5-126.6 18.9z">
        </path>
        <path data-v-dc02fb85=""
          d="M256.4 0C136.8 45 31.5 151.4 31.5 259.4c0 85 68.4 153.9 195.3 137.3 3.9-.5 7.6-1.1 11.2-1.7-1.1-.4-2.1-.9-2.9-1.3-19.4-9.8-53.4-56.7-39-112.6 1.4 59.3 39.7 102.6 57.1 111 2.7 1.3 11.9 4.6 25.5 6.7 51.9 8 164.9 4.7 187.9-116.7C498.9 111.4 256.4 0 256.4 0z">
        </path>
      </svg>
      <span class="title">MomoTalk</span>
    </div>
    <div class="momoTalk-chatWindow"></div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'


</script>
<style scoped lang='less'>
.momoTalk {
  height: calc(100vh - 50px);
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .momoTalk-top {
    background-color: #f19eaa;
    width: 28%;
    padding: 14px 7px;
    // height: 9%;
    display: flex;
    // justify-content: center;
    justify-content: flex-start;
    align-items: center;

    svg {
      fill: #fff;
      transition: fill .375s ease-in-out;
      width: 1.5rem;
      height: 1.5rem;
    }

    .title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #fff;
      margin-left: 10px;
      letter-spacing: .05rem;
      font-family: Asap Condensed Bold Italic, Microsoft YaHei, PingFang SC, -apple-system, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, BlinkMacSystemFont, Helvetica Neue, Hiragino Sans GB, Arial, sans-serif;
    }
  }

  .momoTalk-chatWindow {
    background-color: #fff;
    padding: 14px 0;
    width: 28%;
    height: 70%;
  }
}
</style>