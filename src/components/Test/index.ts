import test from './src/index.vue'
import { withInstall } from '@/utils'

const comp = withInstall(test)
export const Test = comp
export default comp
