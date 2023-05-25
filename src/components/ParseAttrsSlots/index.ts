import parseAttrsSlots from './src/index.vue'
import { withInstall } from '@/utils'

const comp = withInstall(parseAttrsSlots)
export const ParseAttrsSlots = comp
export default comp
