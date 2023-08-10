import type { AxiosRequestConfig, Canceler } from 'axios'

import axios from 'axios'
import { isFunction } from '@/utils/is'

// 用于存储每个请求的识别和取消功能
let pendingMap = new Map<string, Canceler>()

const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join('&')

class AxiosCanceler {
  /**
   * @description 新增请求
   * @param {Object} config
   */
  addPending(config: AxiosRequestConfig) {
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel)
        }
      })
  }

  /**
   * @description 清除所有请求
   */
  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }

  /**
   * @description 删除请求
   * @param {Object} config
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)

    // 存在则删除
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && cancel(url)
      pendingMap.delete(url)
    }
  }

  /**
   * @description: 重置
   */
  reset(): void {
    pendingMap = new Map<string, Canceler>()
  }
}

export { getPendingUrl, AxiosCanceler }
