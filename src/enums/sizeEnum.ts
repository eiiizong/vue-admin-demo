enum SizeEnum {
  DEFAULT = 'default',
  SMALL = 'small',
  LARGE = 'large'
}

enum SizeNumberEnum {
  DEFAULT = 48,
  SMALL = 16,
  LARGE = 64
}

const sizeMap: Map<SizeEnum, SizeNumberEnum> = (() => {
  const map = new Map<SizeEnum, SizeNumberEnum>()
  map.set(SizeEnum.DEFAULT, SizeNumberEnum.DEFAULT)
  map.set(SizeEnum.SMALL, SizeNumberEnum.SMALL)
  map.set(SizeEnum.LARGE, SizeNumberEnum.LARGE)
  return map
})()

export { SizeEnum, SizeNumberEnum, sizeMap }
