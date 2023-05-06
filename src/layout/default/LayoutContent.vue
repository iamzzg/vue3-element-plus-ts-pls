<script lang="tsx">
import { defineComponent } from 'vue'
import PageContent from '../page/index.vue'
export default defineComponent({
  name: 'LayoutContent',
  setup() {
    function render() {
      return <PageContent class={'p-[20px]'}></PageContent>
    }

    return render
  }
})
</script>
