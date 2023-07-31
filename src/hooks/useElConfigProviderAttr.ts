import type { Language } from 'element-plus/es/locale/index'

import { zhCn } from '@/locales'

/**
 * element plus 全局的配置选项
 */
interface ElConfigProviderAttr {
  /**
   * 翻译文本对象
   */
  locale: Language
  /**
   * 全局组件大小
   */
  size: 'large' | 'default' | 'small'
  /**
   * 全局初始化 zIndex 的值
   */
  zIndex: number
  /**
   * 全局组件类名称前缀 (需要配合 $namespace 使用)
   */
  namespace: 'el'
  /**
   * 按钮相关配置
   */
  button: {
    /**
     * 自动在两个中文字符之间插入空格
     */
    autoInsertSpace: boolean
  }
  /**
   * 消息相关配置
   */
  message: {
    /**
     * 可同时显示的消息最大数量
     */
    max: number
  }
}

const useElConfigProviderAttr = (): ElConfigProviderAttr => {
  const size = 'default'
  const locale = zhCn
  const zIndex = 999
  const button = {
    autoInsertSpace: false
  }
  const message = {
    max: 3
  }

  return {
    locale,
    size,
    zIndex,
    namespace: 'el',
    button,
    message
  }
}

export { useElConfigProviderAttr }
