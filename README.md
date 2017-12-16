# rn-markdown-parser

markdown parser for react-native using the great [marked](https://github.com/chjj/marked) parser

## Usage

```js
const { parse } = require('rn-markdown-parser')

// opts accepted by the marked parser (https://github.com/chjj/marked)
const markedOpts = {}
const parsed = parse(`
# My Markdown Heading

- list item 1
- list item 2
`, markedOpts)

console.log(parsed)

// { 
//   type: 'container',
//   children: [ 
//     { type: 'heading', depth: 1, children: [Object] },
//     { type: 'list', ordered: false, children: [Object] } 
//   ] 
// }

```
