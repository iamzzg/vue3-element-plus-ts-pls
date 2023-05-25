<script lang="tsx">
import { useAppStore } from '@/stores/modules/appSetting'
import { defineComponent } from 'vue'

export default defineComponent({
  setup(_, { attrs }) {
    const appStore = useAppStore()
    return () => (
      <section class="flex items-center p-2 cursor-pointer text-white">
        <svg-icon {...attrs} icon="logo" size="40"></svg-icon>
        {appStore.menuCollapsed ? null : <span class="ml-2">ADMIN</span>}
      </section>
    )
  }
})
</script>
