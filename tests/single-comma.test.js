const postcss = require('postcss')
const plugin = require('../index')

test('It parses a single comma-separated property.', () => {
  const fixture = `
.foo {
  height, width: 100px;
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
