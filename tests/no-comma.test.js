const postcss = require('postcss')
const plugin = require('../index')

test('It ignores properties without commas.', () => {
  const fixture = `
.foo {
  height: 100px;
  width: 100px;
}
`
  const expected = `
.foo {
  height: 100px;
  width: 100px;
}
`
  postcss([plugin]).process(fixture).then(result => {
    expect(result.css).toEqual(expected)
  })
})
