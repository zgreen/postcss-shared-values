# PostCSS Shared Values

![Travis build status](https://travis-ci.org/zgreen/postcss-shared-values.svg?branch=master)

A PostCSS plugin that allows for a comma-separated shorthand for properties that share the same value.

## Usage examples

### Input CSS:
```css
.foo {
  height, width: 100px;
}
```

### Output CSS:
```css
.foo {
  height: 100px;
  width: 100px;
}
```

## Try it out.

An example is available in this repository. Use `npm run example` or `yarn example` to try it out.

## Is this a good idea?

Maybe, maybe not. This plugin encourages an invalid CSS syntax, which may confusing to some users. However, it also encourages the user to explicitly group properties that are meant to share the same value, which may be helpful from a code maintenance standpoint. It's also a convenient shorthand.
