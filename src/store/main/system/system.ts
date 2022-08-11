import { defineStore } from "pinia"
import { getPageListData } from "@/service/main/system/system"

export const systemStore = defineStore("system", {
  state: () => {
    return {
      usersList: [] as any[],
      usersCount: 0,
      roleList: [] as any[],
      roleCount: 0,
      goodsList: [] as any[],
      goodsCount: 0,      
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return eval("state." + pageName.toLowerCase() + "List")
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return eval("state." + pageName.toLowerCase() + "Count")
      }
    }
  },
  actions: {
    changeUsersList(userList: any[]) {
      this.usersList = userList
    },
    changeUsersCount(userCount: number) {
      this.usersCount = userCount
    },
    changeRoleList(list: any[]) {
      this.roleList = list
    },
    changeRoleCount(count: number) {
      this.roleCount = count
    }, 
    changeGoodsList(list: any[]) {
      this.goodsList = list
    },
    changeGoodsCount(count: number) {
      this.goodsCount = count
    },    
    async getPageList(payload: any) {
      // 1.获取pageUrl
      const pageName = payload.pageName
      const pageUrl = `${pageName}/list`

      // 2.对页面发送请求
      let pageResult = await getPageListData(pageUrl, payload.queryInfo)
      console.log(pageResult)
      // 3.将数据存储到state中
      const { list, totalCount } = pageResult.data
      // 动态调用方法
      eval("this.change" + pageName + "List(list)")
      eval("this.change" + pageName + "Count(totalCount)")

    }
  }
})