/**
 * @description: menu type
 */
enum MenuTypeEnum {
  // left menu
  SIDEBAR = 'sidebar',

  MIX_SIDEBAR = 'mix-sidebar',
  // mixin menu
  MIX = 'mix',
  // top menu
  TOP_MENU = 'top-menu'
}

// 折叠触发器位置
enum TriggerEnum {
  // 不显示
  NONE = 'NONE',
  // 菜单底部
  FOOTER = 'FOOTER',
  // 头部
  HEADER = 'HEADER'
}

// menu mode
enum MenuModeEnum {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  VERTICAL_RIGHT = 'vertical-right',
  INLINE = 'inline'
}

enum MenuSplitTyeEnum {
  NONE,
  TOP,
  LEFT
}

enum TopMenuAlignEnum {
  CENTER = 'center',
  START = 'start',
  END = 'end'
}

enum MixSidebarTriggerEnum {
  HOVER = 'hover',
  CLICK = 'click'
}

export type Mode = 'vertical' | 'vertical-right' | 'horizontal' | 'inline'

export {
  MenuTypeEnum,
  TriggerEnum,
  MenuModeEnum,
  MenuSplitTyeEnum,
  TopMenuAlignEnum,
  MixSidebarTriggerEnum
}
