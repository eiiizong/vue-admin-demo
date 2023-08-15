import type { InjectionKey, Ref } from 'vue'

import { createContext, useContext } from '@/hooks/core/useContext'

const key: InjectionKey<AppProviderContextProps> = Symbol()

/**
 * 全局注入的数据
 */
export interface AppProviderContextProps {
  /**
   * 类名前缀
   */
  prefixCls: Ref<string>
  /**
   * 是否是移动设备
   */
  isMobile: Ref<boolean>
}

/**
 * 创建全局注入的数据
 */
const createAppProviderContext = (context: AppProviderContextProps) => {
  return createContext<AppProviderContextProps>(context, key)
}

/**
 * 使用全局注入的数据
 */
const useAppProviderContext = () => {
  return useContext<AppProviderContextProps>(key)
}

export { createAppProviderContext, useAppProviderContext }
