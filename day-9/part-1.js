const input = require('./input.json')

const findSum = (list, sum) => {
  const listLength = list.length
  let i, j
  for (i = 0; i < listLength; i += 1) {
    for (j = 0; j < listLength; j += 1) {
      if ((list[i] !== list[j]) && (list[i] + list[j] === sum)) {
        return true
      }
    }
  }
  return false
}
let sum
for (let i = 25; i < input.length; i += 1) {
  const list = input.slice(i - 25, i + 1)
  list.sort((a, b) => {
    return a - b
  })
  sum = input[i + 1]
  const found = findSum(list, sum)
  if (!found) {
    console.log(sum)
    return
  }
}

