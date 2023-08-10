const toString = Object.prototype.toString

/**
 * 判断 val 的类型
 * @param val 值
 * @param type 类型
 */
const is = (
  val: unknown,
  type:
    | 'String'
    | 'Boolean'
    | 'Date'
    | 'Object'
    | 'Number'
    | 'Promise'
    | 'RegExp'
    | 'Window'
    | 'Map'
) => {
  return toString.call(val) === `[object ${type}]`
}

/**
 * 判断 val 是否不是 undefined
 * @param val 值
 */
const isDef = <T = unknown>(val?: T): val is T => {
  return typeof val !== 'undefined'
}

/**
 * 判断 val 是否是 undefined
 * @param val 值
 */
const isUnDef = <T = unknown>(val?: T): val is T => {
  return !isDef(val)
}

/**
 * 判断 val 是否是 Object
 * @param val 值
 */
const isObject = (val: any): val is Record<any, any> => {
  return val !== null && is(val, 'Object')
}

const isEmpty = <T = unknown>(val: T): val is T => {
  if (isArray(val) || isString(val)) {
    return val.length === 0
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0
  }

  return false
}

const isDate = (val: unknown): val is Date => {
  return is(val, 'Date')
}

const isNull = (val: unknown): val is null => {
  return val === null
}

const isNullAndUnDef = (val: unknown): val is null | undefined => {
  return isUnDef(val) && isNull(val)
}

const isNullOrUnDef = (val: unknown): val is null | undefined => {
  return isUnDef(val) || isNull(val)
}

const isNumber = (val: unknown): val is number => {
  return is(val, 'Number')
}

const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

const isString = (val: unknown): val is string => {
  return is(val, 'String')
}

/**
 * 判断 val 是否是一个函数
 * @param val 值
 */
const isFunction = (val: unknown): val is Function => {
  return typeof val === 'function'
}

const isBoolean = (val: unknown): val is boolean => {
  return is(val, 'Boolean')
}

const isRegExp = (val: unknown): val is RegExp => {
  return is(val, 'RegExp')
}

const isArray = (val: any): val is Array<any> => {
  return val && Array.isArray(val)
}

const isWindow = (val: any): val is Window => {
  return typeof window !== 'undefined' && is(val, 'Window')
}

const isElement = (val: unknown): val is Element => {
  return isObject(val) && !!val.tagName
}

const isMap = (val: unknown): val is Map<any, any> => {
  return is(val, 'Map')
}

const isServer = typeof window === 'undefined'

const isClient = !isServer

const isUrl = (path: string): boolean => {
  const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
  return reg.test(path)
}

export {
  is,
  isDef,
  isUnDef,
  isObject,
  isEmpty,
  isDate,
  isNull,
  isNullAndUnDef,
  isNullOrUnDef,
  isNumber,
  isPromise,
  isString,
  isFunction,
  isBoolean,
  isRegExp,
  isArray,
  isWindow,
  isElement,
  isMap,
  isServer,
  isClient,
  isUrl
}
