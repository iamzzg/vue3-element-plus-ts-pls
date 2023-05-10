import chalk from 'chalk'
import fs, { writeFileSync } from 'fs-extra'

import pkg from '../../package.json'
import { getRootPath, getEnvFileExts, getEnvConfig } from '../utils'

// build后脚本,构建 _app.config.js 定义全局变量
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
const configName = pkg.name
const OUTPUT_DIR = 'dist'
const configFileName = '_app.config.js'

/**
 * 创建window.config的配置文件,将一些.env中的以VITE_GLOBAL开头的变量暴露到window中
 */
function buildGlobalConfig() {
  const envConfig = getEnvConfig()
  try {
    // write env.global config.js
    const windowConf = `window["${configName}"]`
    // Ensure that the variable will not be modified
    const configStr = `${windowConf}=${JSON.stringify(envConfig)};
      Object.freeze(${windowConf});
      Object.defineProperty(window, "${configName}", {
        configurable: false,
        writable: false,
      });
    `.replace(/\s/g, '')
    fs.mkdirp(getRootPath(OUTPUT_DIR))
    writeFileSync(getRootPath(`${OUTPUT_DIR}/${configFileName}`), configStr)
    console.log(chalk.cyan(`✨ [${pkg.name}]`) + ` - configuration file is build successfully:`)
    console.log(chalk.gray(OUTPUT_DIR + '/' + chalk.green(configFileName)) + '\n')
  } catch (error) {
    console.log(chalk.red('configuration file failed to package:\n' + error))
  }
}

runPostBuild()
