import fs from 'fs'
import path from 'node:path'
import dotenv from 'dotenv'
import { EXTRACT_ENV_PREFIX } from './constant'

// 把环境变量字符串变成字符串，变量，
export const wrapperEnv = (env: Recordable): ViteEnv => {
  const ret: any = {}

  for (const key of Object.keys(env)) {
    // 移除空格
    let val = env[key].replace(/\\n/g, '\n')

    val = val === 'true' ? true : val === 'false' ? false : val

    if (key === 'VITE_PORT') {
      val = +val
    }
    ret[key] = val
  }

  return ret
}

export const isBuildReport = () => {
  return process.env.REPORT === 'true'
}

/**
 * 获取绝对路径
 * @param dir 目录路径
 * @returns 返回相对工作目录的绝对路径
 */
export const getRootPath = (dir: string) => {
  return path.resolve(process.cwd(), dir)
}

/**
 * 返回当前模式使用的 env 文件后缀 [.env,.env.production]
 * @returns 返回当前模式使用的 env 文件后缀 [.env,.env.production]
 */
export const getEnvFileExts = (): string[] => {
  // cross-env NODE_ENV=production vite build && esno ./build/script/postBuild.ts
  const script = process.env.npm_lifecycle_script
  const reg = /--mode ([a-z_\\d]+)/
  const result = reg.exec(script as string) as any

  // console.log('--------------', process.env)

  if (result) {
    const mode = result[1] as string
    return ['.env', `.env.${mode}`]
  }
  return ['.env', '.env.production']
}

/**
 * 返回全局变量
 * @param match env注入window变量前缀
 * @param envNames .env文件列表
 * @returns
 */
export const getEnvConfig = (match = EXTRACT_ENV_PREFIX, envNames = getEnvFileExts()) => {
  const globalEnv = {}

  envNames.forEach((item) => {
    try {
      const env = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), item)))
      // console.log(env)
      Object.assign(globalEnv, env)
    } catch (error) {
      console.log(`ERROR: in parsing ${item}`, error)
    }
  })
  // console.log('筛选前::>>', globalEnv)

  const reg = new RegExp(`^(${match})`)

  Object.keys(globalEnv).forEach((key) => {
    if (!reg.test(key)) {
      Reflect.deleteProperty(globalEnv, key)
    }
  })
  // console.log('筛选后::>>', globalEnv)
  return globalEnv
}

/**
 * 获取挂载到 window 下的 key 名
 * @param env
 * @returns
 */
export const getConfInWindowKey = (env: ViteEnv) => {
  return `__PROD__${env.VITE_WINDOW_CONFIG_KEY || 'APP'}__CONF__`.toUpperCase().replace(/\s/g, '')
}
