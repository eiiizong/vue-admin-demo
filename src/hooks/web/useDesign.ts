import { useAppProviderContext } from '@/components/Application'

const useDesign = (scope: string) => {
  const values = useAppProviderContext()
  const { prefixCls } = values
  return {
    prefixCls: `${prefixCls}-${scope}`,
    prefixVar: prefixCls
  }
}

export { useDesign }
