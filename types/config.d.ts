import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '@/enums/menuEnum'
import {
  ContentEnum,
  PermissionModeEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum
} from '@/enums/appEnum'
import { CacheTypeEnum } from '@/enums/cacheEnum'

/**
 * 语言类型
 */
export type LocaleType = 'zh_CN' | 'en'

/**
 * 语言设置
 */
export interface LocaleSetting {
  /**
   * 是否显示picker
   */
  showPicker: boolean
  /**
   * 当前语言
   */
  locale: LocaleType
  /**
   * 默认语言
   */
  fallback: LocaleType
  /**
   * 可获取的语言
   */
  availableLocales: LocaleType[]
}

/**
 * header setting
 */
export interface HeaderSetting {
  bgColor: string
  fixed: boolean
  show: boolean
  theme: ThemeEnum
  /**
   * 打开全屏
   */
  showFullScreen: boolean
  /**
   * 是否显示锁定屏幕
   */
  useLockPage: boolean
  /**
   * 是否显示文档按钮
   */
  showDoc: boolean
  /**
   * 是否显示消息中心按钮
   */
  showNotice: boolean
  showSearch: boolean
}

/**
 * 菜单配置
 */
export interface MenuSetting {
  bgColor: string
  fixed: boolean
  collapsed: boolean
  siderHidden: boolean
  canDrag: boolean
  show: boolean
  hidden: boolean
  split: boolean
  menuWidth: number
  mode: MenuModeEnum
  type: MenuTypeEnum
  theme: ThemeEnum
  topMenuAlign: 'start' | 'center' | 'end'
  trigger: TriggerEnum
  accordion: boolean
  closeMixSidebarOnChange: boolean
  collapsedShowTitle: boolean
  mixSideTrigger: MixSidebarTriggerEnum
  mixSideFixed: boolean
}

/**
 * tabs 配置
 */
export interface MultiTabsSetting {
  cache: boolean
  show: boolean
  showQuick: boolean
  canDrag: boolean
  showRedo: boolean
  showFold: boolean
}

/**
 * 动画配置
 */
export interface TransitionSetting {
  /**
   * 是否打开页面切换动画
   */
  enable: boolean
  /**
   * 路由基本切换动画
   */
  basicTransition: RouterTransitionEnum
  /**
   * 是否打开页面或切换时显示加载状态
   */
  openPageLoading: boolean
  /**
   * 是否打开顶部进度条
   */
  openNProgress: boolean
}

/**
 * 项目配置
 */
export interface ProjectConfig {
  /**
   * 权限相关信息的存储位置
   */
  permissionCacheType: CacheTypeEnum
  /**
   * 是否显示配置按钮
   */
  showSettingButton: boolean
  /**
   * 是否显示主题切换按钮
   */
  showDarkModeToggle: boolean
  /**
   * 配置按钮的显示位置
   */
  settingButtonPosition: SettingButtonPositionEnum
  /**
   * 权限模式
   */
  permissionMode: PermissionModeEnum
  /**
   * 会话超时处理
   */
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum
  /**
   * 网站灰色模式，对可能的哀悼日期开放
   */
  grayMode: boolean
  /**
   * 是否打开弱色模式
   */
  colorWeak: boolean
  /**
   * 主题颜色
   */
  themeColor: string
  /**
   * 主界面全屏显示，菜单不显示，顶部
   */
  fullContent: boolean
  /**
   * 内容宽度
   */
  contentMode: ContentEnum
  /**
   * 是否显示 logo
   */
  showLogo: boolean
  /**
   * 是否显示全局页脚
   */
  showFooter: boolean
  /**
   * headerSetting
   */
  headerSetting: HeaderSetting
  /**
   * 菜单配置
   */
  menuSetting: MenuSetting
  /**
   * tab 配置
   */
  multiTabsSetting: MultiTabsSetting
  /**
   * 动画配置
   */
  transitionSetting: TransitionSetting
  /**
   * pageLayout是否启用保持活动。开启后切换tab页不刷新
   */
  openKeepAlive: boolean
  /**
   * 锁定屏幕时间
   */
  lockTime: number
  /**
   * 显示面包屑
   */
  showBreadCrumb: boolean
  /**
   * 显示面包屑图标
   */
  showBreadCrumbIcon: boolean
  /**
   * 使用错误处理程序插件
   */
  useErrorHandle: boolean
  /**
   * 是否打开返回顶部
   */
  useOpenBackTop: boolean
  /**
   * 是否可以嵌入iframe页面
   */
  canEmbedIFramePage: boolean
  /**
   * 切换接口时是否删除未关闭的消息并通知
   */
  closeMessageOnSwitch: boolean
  /**
   * 切换接口时是否取消已发送但未响应的http请求。
   */
  removeAllHttpPending: boolean
}
