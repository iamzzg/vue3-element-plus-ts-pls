/* eslint-disable no-undef */
module.exports = {
  // 即时编译模式,text-[22px]
  mode: 'jit',
  //摇树优化
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // v3版本
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    // 关闭预设
    preflight: false
  }
}
