import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register' // 引入图标注册脚本
import 'tailwindcss/tailwind.css'
import './styles/index.scss'

import { registerGlobComp } from './components/registerGlobComp'
import { setupStore } from './stores'

bootstrap()

function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  app.use(router)

  registerGlobComp(app)

  app.mount('#app')
}
