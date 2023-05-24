<script lang="tsx">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ParseSlots',
  setup(props, { slots, attrs }) {
    const defaultSlots = slots.default as Fn

    return () => (defaultSlots ? defaultSlots(attrs) : null)
  }
})
</script>
