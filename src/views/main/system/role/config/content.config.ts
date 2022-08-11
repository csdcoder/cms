export const contentTableConfig = {
  title: "用户列表",

  propsList: [
    { prop: 'roleName', label: '角色名', minWdith: '100' },
    { prop: 'intro', label: '权限介绍', minWdith: '100' },
    { prop: 'createAt', label: '创建时间', minWdith: '250', slotName: "createAt" },
    { prop: 'updateAt', label: '更新时间', minWdith: '250', slotName: "updateAt" },
    { label: "操作", minWidth: "120", slotName: "handler" }
  ],

  showIndexColumn: true,
  showSelectColumn: true,
}

