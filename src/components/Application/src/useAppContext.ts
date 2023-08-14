import type { InjectionKey, Ref } from 'vue'

import { createContext, useContext } from '@/hooks/core/useContext'

const key: InjectionKey<AppProviderContextProps> = Symbol()

export interface AppProviderContextProps {
  prefixCls: Ref<string>
  isMobile: Ref<boolean>
}

export function createAppProviderContext(context: AppProviderContextProps) {
  return createContext<AppProviderContextProps>(context, key)
}

export function useAppProviderContext() {
  return useContext<AppProviderContextProps>(key)
}
