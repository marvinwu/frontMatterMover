const {mover} = "../lib/index.js"

test('simple', () => {

const input = `
test
test1
---
hello
---
test2


`
const output = mover(input)
console.log(output)
// expect(result).toEqual('')
})