import dayjs from 'dayjs'

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'

const formatToDateTime = (date?: dayjs.ConfigType, format = DATE_TIME_FORMAT): string => {
  return dayjs(date).format(format)
}

const formatToDate = (date?: dayjs.ConfigType, format = DATE_FORMAT): string => {
  return dayjs(date).format(format)
}

const dateUtil = dayjs

export { dateUtil, formatToDateTime, formatToDate }
