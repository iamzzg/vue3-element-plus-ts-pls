import avatar from './src/index.vue'
import { withInstall } from '@/utils'

const comp = withInstall(avatar)
export const Avatar = comp
export default comp
