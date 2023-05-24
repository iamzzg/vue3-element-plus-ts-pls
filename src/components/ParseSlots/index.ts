import parseSlots from './src/index.vue'
import { withInstall } from '@/utils'

const comp = withInstall(parseSlots)
export const ParseSlots = comp
export default comp
