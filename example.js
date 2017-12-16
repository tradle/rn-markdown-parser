const { parse } = require('./')

const markedOpts = {}
const parsed = parse(`
# My Markdown Heading

- list item 1
- list item 2
`, markedOpts)

console.log(parsed)
