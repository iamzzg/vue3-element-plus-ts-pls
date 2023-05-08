<script lang="tsx">
import { defineComponent } from 'vue'
import PageContent from '../page/index.vue'
export default defineComponent({
  name: 'LayoutContent',
  setup() {
    function render() {
      return (
        <div class="layout-container">
          <PageContent></PageContent>
        </div>
      )
    }

    return render
  }
})
</script>

<style lang="scss" scoped>
.layout-container {
  height: calc(100vh - 80px);
  padding: 20px;
  overflow: auto;
}
</style>
