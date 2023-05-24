<template>
  <el-image v-bind="$attrs" :src="getRealSrc">
    <template #error>
      <slot name="error">
        <img :src="errImg" alt="" />
      </slot>
    </template>
    <template v-for="slotName in Object.keys($slots)" #[slotName]="bind">
      <slot :name="slotName" v-bind="bind"></slot>
    </template>
  </el-image>
</template>

<script lang="ts" setup>
import { useViteGlobalSetting } from '@/hooks/settings'
import { isExternal } from '@/utils/validate'
import { computed } from 'vue'
import errImg from '@/assets/images/error_picture.png'

defineOptions({
  name: 'Image'
})

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  prefix: {
    type: String,
    default: ''
  }
})

const { imgPrefixUrl } = useViteGlobalSetting()

const getRealSrc = computed(() => {
  if (isExternal(props.src)) {
    return props.src
  } else {
    return imgPrefixUrl + props.prefix + props.src
  }
})
</script>

<style lang="scss" scoped></style>
