interface Menu {
  orderNo: number
  isCommonMenu: boolean
  prefix: string | null
  name: string
  iconColor: string | null
  icon: string | null
  pid: string
  id: string
  url: string | null
  children?: Menu[]
}

const menuData: Menu[] = [
  {
    orderNo: 51,
    isCommonMenu: false,
    prefix: null,
    name: '管理系统',
    iconColor: null,
    icon: 'setting',
    pid: '40337bdecb19484ebeb39d6c21aaca26',
    id: '0415d44401b24605a21b589b6aaa349e',
    url: null,
    children: [
      {
        prefix: null,
        name: '组织人员管理',
        iconColor: null,
        icon: 'usergroup-add',
        pid: '0415d44401b24605a21b589b6aaa349e',
        id: '48afedddc8f04c668b3c1572c30a7745',
        url: null,
        orderNo: 10,
        isCommonMenu: false,
        children: [
          {
            orderNo: 0,
            isCommonMenu: false,
            prefix: null,
            name: '组织机构管理',
            iconColor: null,
            icon: 'cluster',
            pid: '48afedddc8f04c668b3c1572c30a7745',
            id: '1e706f26bc144c1da12022359c238053',
            url: 'orguser.html#/orgManagement'
          }
        ]
      }
    ]
  }
]

export { menuData }
