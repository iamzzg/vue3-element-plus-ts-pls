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
