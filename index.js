const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  presets: [
    require('babel-preset-flow')
  ],
  plugins: [
    [require('babel-plugin-emotion'), { hoist: isProduction, autoLabel: isDevelopment, sourceMap: isDevelopment }]
  ]
}
