<script lang="tsx">
// 属性，插槽透传组件
import { findFirstComponentVnode } from '@/utils/vue-helper'
import { defineComponent, h, type VNode } from 'vue'
export default defineComponent({
  name: 'ParseAttrsSlots',
  setup(props, { slots, attrs }) {
    const defaultSlots = slots.default

    const vnodes = defaultSlots!() as VNode[]

    const firstComponentVnode = findFirstComponentVnode(vnodes)
    console.log('firstComponentVnode ctx', firstComponentVnode?.ctx)

    const parentSlots = firstComponentVnode?.ctx?.slots || {}

    const parseSlots = {} as Recordable

    Object.keys(parentSlots).forEach((slotName) => {
      // 作用域插槽透传
      parseSlots[slotName] = (slotscoped: any) => {
        return parentSlots[slotName](slotscoped)
      }
    })

    // 属性(事件),插槽透传
    return () =>
      firstComponentVnode ? h(firstComponentVnode, { attrs: attrs }, parseSlots) : vnodes
  }
})
</script>
