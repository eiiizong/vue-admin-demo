import { MenuModeEnum, MenuTypeEnum } from '@/enums/menuEnum'

/**
 * 当窗口缩小时，记住一些状态，并在窗口恢复时恢复这些状态
 */
export interface BeforeMiniState {
  menuCollapsed?: boolean
  menuSplit?: boolean
  menuMode?: MenuModeEnum
  menuType?: MenuTypeEnum
}
