import emotionPlugin from 'babel-plugin-emotion'
import flowPreset from 'babel-preset-flow'

export default () => ({
  presets: [flowPreset],
  env: {
    production: {
      plugins: [
        // ramdaPlugin,
        [emotionPlugin, { hoist: true }],
      ],
    },
    development: {
      plugins: [
        // ramdaPlugin,
        [emotionPlugin, { autoLabel: true, sourceMap: true }],
      ],
    },
  },
})
