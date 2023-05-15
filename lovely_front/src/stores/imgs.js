import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useImgsStore = defineStore('imgsCount', () => {
  const imgs = ref([])
  let count = ref(0)
  const addImgs = (newImgs) => {
    imgs.value = newImgs
  }
  return { count,imgs, addImgs }
})

