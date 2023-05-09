<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-bind="$attrs"
  />
  <svg v-else :class="svgClass" aria-hidden="true" :style="style" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { isExternal } from '@/utils/validate'
import { defineComponent, type CSSProperties } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    // 大小
    size: {
      type: [Number, String],
      default: 16
    },
    color: {
      type: String
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.icon)
    },
    iconName() {
      return `#icon-${this.icon}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.icon}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.icon}) no-repeat 50% 50%`
      }
    },
    style() {
      const style = {} as CSSProperties
      if (this.color) {
        style.color = this.color
      }
      let size: string
      if (this.size) {
        if (typeof this.size == 'number' || /^\d+$/.test(this.size)) {
          size = this.size + 'px'
        } else {
          size = this.size
        }
        style.fontSize = size
      }
      return style
    }
  }
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}

.svg-external-icon {
  display: inline-block;
  background-color: currentColor;
  mask-size: cover !important;
}
</style>
