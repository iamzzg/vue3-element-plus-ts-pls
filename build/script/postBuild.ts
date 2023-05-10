import chalk from 'chalk'
// import fs, { writeFileSync } from 'fs-extra'

import pkg from '../../package.json'

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
// const configName = pkg.name
function buildGlobalConfig() {
  // try {
  //   // write env.global config.js
  //   const windowConf = `window.${configName}`
  //   // Ensure that the variable will not be modified
  //   const configStr = `${windowConf}=${JSON.stringify({ hello: 'world' })};
  //     Object.freeze(${windowConf});
  //     Object.defineProperty(window, "${configName}", {
  //       configurable: false,
  //       writable: false,
  //     });
  //   `.replace(/\s/g, '')
  //   fs.mkdirp(getRootPath(OUTPUT_DIR)) // mkdir
  //   writeFileSync(getRootPath(`${OUTPUT_DIR}/${configFileName}`), configStr)
  //   console.log(chalk.cyan(`✨ [${pkg.name}]`) + ` - configuration file is build successfully:`)
  //   console.log(chalk.gray(OUTPUT_DIR + '/' + chalk.green(configFileName)) + '\n')
  // } catch (error) {
  //   console.log(chalk.red('configuration file configuration file failed to package:\n' + error))
  // }
}

runPostBuild()
