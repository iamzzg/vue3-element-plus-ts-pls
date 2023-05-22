import svgIcon from './src/index.vue'
import { withInstall } from '@/utils'

const comp = withInstall(svgIcon)
export const SvgIcon = comp
export default comp
export type SvgIconType = typeof comp
