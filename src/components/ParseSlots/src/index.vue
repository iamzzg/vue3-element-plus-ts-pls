<script lang="tsx">
import { defineComponent, type Slots, type VNode } from 'vue'
export default defineComponent({
  name: 'ParseSlots',
  setup(props, { slots, attrs }) {
    const defaultSlots = slots.default

    const vnode = defaultSlots!() as VNode[]
    console.log(vnode)
    console.log(vnode[0].ctx)

    const parentSlots = vnode[0].ctx?.slots

    console.log(parentSlots)

    return () => (defaultSlots ? <component is={vnode[0]}>{{ ...parentSlots }}</component> : null)
  }
})
</script>
