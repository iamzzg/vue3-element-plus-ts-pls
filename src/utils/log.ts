const appName = import.meta.env.VITE_GLOBAL_APP_TITLE

export function warn(msg: string) {
  console.warn(`[${appName} warn]: ${msg}`)
}

export function error(msg: string) {
  throw new Error(`[${appName} error]:${msg}`)
}
