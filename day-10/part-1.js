const input = require('./input.json')

input.sort((a, b) => a - b)

const inputLength = input.length

let jumps = { 1: 0, 3: 1 }

input.forEach((joltage, i) => {
    const previous = input[i - 1]
    const difference = joltage - (previous || 0)
    jumps[difference] += 1
})

console.log(`highest: ${input[inputLength - 1] + 3}`)
console.log(jumps)
console.log(jumps['1'] * (jumps['3']))
