/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string): path is string {
  return /^(https?:|mailto:|tel:)/.test(path)
}

type EsType =
  | 'String'
  | 'Number'
  | 'Boolean'
  | 'Object'
  | 'Array'
  | 'Function'
  | 'Null'
  | 'Undefined'

export function isType(type: EsType) {
  return function (arg: any) {
    return Object.prototype.toString.call(arg) == `[object ${type}]`
  }
}

export function isDef<T = unknown>(arg?: T): arg is T {
  return arg !== undefined && arg !== null
}

export function isUndefOrNull(arg: any): boolean {
  return arg === undefined || arg === null
}

export function isUndef(arg: any): boolean {
  return !isDef(arg)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String || isType('String')) {
    return true
  }
  return false
}
export function isNumber(arg) {
  return typeof arg == 'number' || isType('Number')
}
export function isBoolean(arg) {
  return typeof arg == 'boolean' || isType('Boolean')
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return isType('Array')
  }
  return Array.isArray(arg)
}

export function isObject(arg) {
  if (arg == null) return false
  return isType('Object')
}
