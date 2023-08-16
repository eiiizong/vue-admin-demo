// import type { DropMenu } from '../components/Dropdown'

import type { LocaleSetting, LocaleType } from '#/config'

interface DropMenu {
  onClick?: Fn
  to?: string
  icon?: string
  event: string | number
  text: string
  disabled?: boolean
  divider?: boolean
}

const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh_CN',
  EN_US: 'en'
}

/**
 * 语言设置
 */
const localeSetting: LocaleSetting = {
  showPicker: true,
  locale: LOCALE.ZH_CN,
  fallback: LOCALE.ZH_CN,
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US]
}

/**
 * 语言列表
 */
const localeList: DropMenu[] = [
  {
    text: '简体中文',
    event: LOCALE.ZH_CN
  },
  {
    text: 'English',
    event: LOCALE.EN_US
  }
]

export { LOCALE, localeSetting, localeList }
