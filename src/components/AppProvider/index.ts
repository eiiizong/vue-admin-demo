import { withInstall } from '@/utils/withInstall'

import appProvider from './src/AppProvider.vue'

console.log(appProvider)

const AppProvider = withInstall(appProvider)

export { AppProvider }
