const {mover} = require("../lib/index.js")

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


test('simple1', () => {
const input = ``
const output = mover(input)
console.log(output)
// expect(result).toEqual('')
})


test('simple2', () => {
const input = `
test
test1
---
hello

`
const output = mover(input)
console.log(output)
// expect(result).toEqual('')
})

