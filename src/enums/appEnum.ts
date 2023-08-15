/**
 * 菜单宽度
 */
const SIDE_BAR_MINI_WIDTH = 48

/**
 * 菜单宽度
 */
const SIDE_BAR_SHOW_TIT_MINI_WIDTH = 80

/**
 * 内容类型
 */
enum ContentEnum {
  FULL = 'full',
  FIXED = 'fixed'
}

/**
 * 主题
 */
enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light'
}

enum SettingButtonPositionEnum {
  AUTO = 'auto',
  HEADER = 'header',
  FIXED = 'fixed'
}

enum SessionTimeoutProcessingEnum {
  ROUTE_JUMP,
  PAGE_COVERAGE
}

/**
 * 权限模式
 */
enum PermissionModeEnum {
  // role
  // 角色权限
  ROLE = 'ROLE',
  // black
  // 后端
  BACK = 'BACK',
  // route mapping
  // 路由映射
  ROUTE_MAPPING = 'ROUTE_MAPPING'
}

/**
 * 路由切换动画
 */
enum RouterTransitionEnum {
  ZOOM_FADE = 'zoom-fade',
  ZOOM_OUT = 'zoom-out',
  FADE_SIDE = 'fade-slide',
  FADE = 'fade',
  FADE_BOTTOM = 'fade-bottom',
  FADE_SCALE = 'fade-scale'
}

export {
  SIDE_BAR_MINI_WIDTH,
  SIDE_BAR_SHOW_TIT_MINI_WIDTH,
  ContentEnum,
  ThemeEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum,
  PermissionModeEnum,
  RouterTransitionEnum
}
