import { defineStore } from "pinia"
import { getPageListData } from "@/service/main/system/system"

export const systemStore = defineStore("system", {
  state: () => {
    return {
      userList: [] as any[],
      userCount: 0
    }
  },
  actions: {
    changeUserList(userList: any[]) {
      this.userList = userList
    },
    changeUserCount(userCount: number) {
      this.userCount = userCount
    },
    async getPageList(payload: any) {
      // 1.对页面发送请求
      const pageResult = await getPageListData(payload.pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      this.changeUserList(list)
      this.changeUserCount(totalCount)
    }
  }
})