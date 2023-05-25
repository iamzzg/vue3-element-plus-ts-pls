import { RouterTransitionEnum } from '@/enums/appEnum'

const setting = {
  // element-plus size
  elSize: 'default' as 'default' | 'small' | 'large',
  zIndex: 3000,
  // 开启 keep-alive，还需要路由名字和组件名字一样才能缓存
  useKeepAlive: true,
  // 路由动画
  routeTransitionName: RouterTransitionEnum.SLIDE_FADE
}

export default setting
