/**
 * 用户设置 store
 */
export interface StroeUserSettings {
  /**
   * 菜单配置
   */
  menu: {
    /**
     * 菜单展示模式 horizontal 横向  vertical 纵向
     */
    mode: 'horizontal' | 'vertical'
    /**
     * 菜单宽度
     */
    width: string
    /**
     * 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
     */
    isCollapse: boolean
    /**
     * 菜单背景色
     */
    // bgColor: string
  }
  /**
   * 主题配置
   */
  theme: {
    /**
     * 主题色
     */
    color: string
    /**
     * 是否为暗黑模式
     */
    isDark: boolean
  }
  /**
   * 语言
   */
  language: 'zh-cn'
  /**
   * 是否显示logo
   */
  showLogo: boolean
  /**
   * 是否显示标签
   */
  showTabs: boolean
  /**
   * 是否显示面包屑
   */
  showBreadcrumb: boolean
}
