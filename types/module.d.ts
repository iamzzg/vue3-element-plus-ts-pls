declare module 'element-plus/dist/locale/*' {
  import type { Language } from 'element-plus/es/locale/index'
  const locale: Language
  export default locale
}
declare module 'element-plus/*' {
  export default {}
}

// import '@vue/runtime-core'

// export {}

// declare module '@vue/runtime-core' {
//   export interface GlobalComponents {
//     Avatar: typeof import('../src/components/Avatar/src/index.vue')
//   }
// }
// declare module 'vue' {
//   export type Vnode = {
//     ctx: any
//   }
// }
