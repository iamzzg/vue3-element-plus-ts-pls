import chalk from 'chalk'
import fs, { writeFileSync } from 'fs-extra'

import pkg from '../../package.json'
import { getRootPath, getEnvConfig, getConfInWindowKey } from '../utils'
import { GLOBAL_CONFIG_FILE_NAME as configFileName, OUTPUT_DIR } from '../constant'

// build后脚本,构建 _app.config.js 将 VITE_GLOBAL_ 开头的环境变量定义全局变量window下
export const runPostBuild = () => {
  try {
    const argvList = process.argv.slice(2)
    if (!argvList.includes('disable-config')) {
      buildGlobalConfig()
    }
    console.log(`${chalk.red('♥')} ${chalk.cyan(`[${pkg.name}]`)} - build successfully`)
  } catch (error) {
    console.log(`❌ ${chalk.red(`vite build error:\n`)}` + error)
    process.exit(1)
  }
}

// const OUTPUT_DIR = 'dist'
// const configFileName = GLOBAL_CONFIG_FILE_NAME

/**
 * 创建window.config的配置文件,将一些.env中的以VITE_GLOBAL开头的变量暴露到window中
 */
function buildGlobalConfig() {
  const envConfig = getEnvConfig()

  const configName = getConfInWindowKey(envConfig)
  try {
    // write env.global config.js
    //window["VITE_GLOBAL_WINDOW_CONFIG_KEY"] = {
    // "VITE_GLOBAL_XXX":""
    // }
    const windowConf = `window["${configName}"]`
    // Ensure that the variable will not be modified
    const configStr = `${windowConf}=${JSON.stringify(envConfig)};
      Object.freeze(${windowConf});
      Object.defineProperty(window, "${configName}", {
        configurable: false,
        writable: false,
      });
    `.replace(/\s/g, '')
    // 创建目录，如果存在，则不做操作,此时vite应该打包完生成dist目录
    fs.mkdirp(getRootPath(OUTPUT_DIR))
    // 同步写入文件
    writeFileSync(getRootPath(`${OUTPUT_DIR}/${configFileName}`), configStr)
    console.log(chalk.cyan(`✨ [${pkg.name}]`) + ` - configuration file is build successfully:`)
    console.log(chalk.gray(OUTPUT_DIR + '/' + chalk.green(configFileName)) + '\n')
  } catch (error) {
    console.log(chalk.red('configuration file failed to package:\n' + error))
  }
}

runPostBuild()
