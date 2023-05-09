import modal from './src/index.vue'
import { withInstall } from '@/utils'

const comp = withInstall(modal)
export const Modal = comp
export default comp
