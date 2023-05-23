<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  setup(_, { attrs }) {
    return () => (
      <section class="flex items-center p-2 cursor-pointer">
        <svg-icon {...attrs} icon="logo" size="40"></svg-icon>
        <span class="ml-2">ADMIN</span>
      </section>
    )
  }
})
</script>
