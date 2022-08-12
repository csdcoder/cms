export const contentTableConfig = {
  title: "用户列表",

  propsList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类级', minWidth: '100' },
    { prop: 'url', label: 'URL', minWidth: '100' },
    { prop: 'icon', label: '菜单icon', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    { prop: 'createAt', label: '创建时间', minWidth: '100' },
    { prop: 'updateAt', label: '更新时间', minWidth: '100' },
    { label: "操作", minWidth: "120", slotName: "handler" }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}