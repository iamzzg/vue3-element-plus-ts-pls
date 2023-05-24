<template>
  <ParseSlots>
    <el-image :src="`/src/assets/images/avatar.png`"> </el-image>
  </ParseSlots>
</template>

<script lang="ts">
import { ParseSlots } from '@/components/ParseSlots'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TestComp',
  components: { ParseSlots },
  props: {},
  setup(props) {}
})
</script>

<style lang="scss" scoped></style>
