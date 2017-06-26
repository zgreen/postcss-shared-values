const postcss = require('postcss')

module.exports = postcss.plugin('postcss-shared-values', () => {
  return function (root, result) {
    root.walkDecls(/.*,.*/, decl => {
      const { before, between } = decl.raws
      const { prop, value } = decl
      const decls = `${prop}${between.replace(':', '').trim('')}`
        .split(',')
        .filter(declaration => declaration.length)
      decl.after(
        decls.reduce((acc, cur) => {
          return acc + `${cur.trim()}: ${value};${before}`
        }, before)
      )
      decl.remove()
    })
  }
})
