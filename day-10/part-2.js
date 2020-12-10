const input = require('./input.json')

input.sort((a, b) => a - b)

const jumps = input.reduce((acc, joltage) => {
    acc[joltage] =
        (acc[joltage - 3] || 0) +
        (acc[joltage - 2] || 0) +
        (acc[joltage - 1] || 0)
    return acc
}, [1]).pop()

console.log(jumps)
