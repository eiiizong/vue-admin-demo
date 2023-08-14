import { withInstall } from '@/utils/withInstall'
import { useAppProviderContext } from './src/useAppContext'

import appProvider from './src/AppProvider.vue'

const AppProvider = withInstall(appProvider)

export { AppProvider, useAppProviderContext }
