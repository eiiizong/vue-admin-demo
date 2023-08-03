interface Menu {
  id: string
  name: string
  pathName: string
  fullPath: string
  children: Menu[]
  iconName: string
}

const menuData: Menu[] = [
  {
    id: 'home',
    name: '首页',
    pathName: '',
    fullPath: '',
    iconName: '',
    children: []
  }
]

export { menuData }
