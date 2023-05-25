import { ShapeFlags } from '@/enums/shapeFlagEnum'
import type { VNode } from 'vue'

/**
 * 判断是否是组件vnode
 * @param shapeFlag vnode.shapeFlag
 * @returns
 */
export const isComponentVnode = (shapeFlag: ShapeFlags) => {
  return [
    ShapeFlags.FUNCTIONAL_COMPONENT,
    ShapeFlags.STATEFUL_COMPONENT,
    ShapeFlags.COMPONENT
  ].includes(shapeFlag)
}

export const findFirstComponentVnode = (vnodes: VNode[]) => {
  return vnodes.find((vnode) => isComponentVnode(vnode.shapeFlag))
}
