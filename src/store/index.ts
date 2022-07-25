import { defineStore } from "pinia";
import { ref } from "vue"

export const useStore = defineStore("main", () => {
  const name = ref("kobe")

  return {
    name,
  }
})

