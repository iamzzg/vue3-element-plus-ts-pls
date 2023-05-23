<script lang="tsx">
import { computed, defineComponent } from 'vue'
import { getImageUrl } from '@/utils'
import { useViteGlobalSetting } from '@/hooks/settings'
import { isExternal } from '@/utils/validate'
export default defineComponent({
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    const { imgPrefixUrl } = useViteGlobalSetting()
    const errorAvatar = getImageUrl('avatar.png')

    const getRealSrc = computed(() => {
      if (isExternal(props.src)) {
        return props.src
      } else {
        return imgPrefixUrl + props.src
      }
    })

    return () => (
      <el-avatar class="cursor-pointer" {...attrs} size="60" src={getRealSrc}>
        <img src={errorAvatar} />
      </el-avatar>
    )
  }
})
</script>

<style lang="scss" scoped></style>
