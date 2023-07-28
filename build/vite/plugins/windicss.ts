import WindiCSS from 'vite-plugin-windicss'

import type { PluginOption } from 'vite';

const configWindicssPlugin = (env: ViteEnv, isBuild: boolean)  => {
    console.log(env,isBuild);
    
    const windiCSSPlugin:PluginOption[] = WindiCSS()

    return windiCSSPlugin
}

export default configWindicssPlugin