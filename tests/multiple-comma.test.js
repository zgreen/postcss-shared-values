const postcss = require('postcss')
const plugin = require('../index')

test('It parses a multiple comma-separated property.', () => {
  const fixture = `
.foo {
  border-width, height, width: 100px;
}
`
  const expected = `
.foo {
  border-width: 100px;
  height: 100px;
  width: 100px;
}
`
  postcss([plugin]).process(fixture).then(result => {
    expect(result.css).toEqual(expected)
  })
})
