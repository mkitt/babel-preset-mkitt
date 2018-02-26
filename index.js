/* eslint-disable global-require */
module.exports = {
  presets: [
    require('babel-preset-flow'),
  ],
  env: {
    production: {
      plugins: [
        [require('babel-plugin-emotion'), { hoist: true }],
      ],
    },
    development: {
      plugins: [
        [require('babel-plugin-emotion'), { autoLabel: true, sourceMap: true }],
      ],
    },
  },
}
