import visualizer from 'rollup-plugin-visualizer'
import { isBuildReport } from '../../utils'
export const setupVisualizerPlugin = () => {
  const svgPlugin = []

  if (isBuildReport()) {
    svgPlugin.push(
      visualizer({
        // filename: './node_modules/.cache/visualizer/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    )
  }

  return svgPlugin
}
