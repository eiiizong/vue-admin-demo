/**
 * @description 是否是开发模式
 */
const isDevMode = (): boolean => {
  return import.meta.env.DEV
}

export { isDevMode }
