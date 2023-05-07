import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register' // 引入图标注册脚本
import 'tailwindcss/tailwind.css'
import './styles/index.scss'

import { registerGlobComp } from './components/registerGlobComp'

bootstrap()

function bootstrap() {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  registerGlobComp(app)

  // test lint-staged husky
  // test commitlint

  app.mount('#app')
}
