module.exports = (ctx) => ({
  plugins: [
    require('postcss-simple-vars')({
      variables: () => require('./dist/variables/variables.js'),
    }),
  ]
})

