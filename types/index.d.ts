// 全局类型
declare interface PromiseFn<T = any, R = T> {
  (...args: T[]): Promise<R>
}
