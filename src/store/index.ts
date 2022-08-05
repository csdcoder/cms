import { defineStore } from "pinia";

import { loginStore } from "@/store/login"

export const useStore = defineStore("main", () => {

})

export function setupStore() {
  const store = loginStore()
  store.loadLocalLogin()
}