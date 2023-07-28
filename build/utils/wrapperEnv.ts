// Read all environment variable configuration files to process.env
const wrapperEnv = (envConf: Recordable): ViteEnv => {
  const ret: any = {}

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')

    // 处理布尔值
    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    // 处理端口号为数值
    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }

    // 处理代理
    if (envName === 'VITE_PROXY' && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'))
      } catch (error) {
        realName = ''
      }
    }

    ret[envName] = realName

    if (typeof realName === 'string') {
      process.env[envName] = realName
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName)
    }
  }
  
  return ret
}

export { wrapperEnv }
