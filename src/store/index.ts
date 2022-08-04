import { defineStore } from "pinia";
import { ref } from "vue"
import { loginStore } from "@/store/login"

export const useStore = defineStore("main", () => {
  // const name = ref("kobe")

  return {
    // name,
  }
})

export function setupStore() {
  const store = loginStore()
  store.loadLocalLogin()
}