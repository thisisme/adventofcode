let input = require('./list.json')
let valid = 0

input.forEach(string => {
  const parts = string.split(' ')
  const times = parts[0].split('-')
  const from = Number(times[0])
  const to = Number(times[1])
  const letter = parts[1].substring(0, 1)
  const password = parts[2]
  const split = password.split('')
  if (split[from - 1] === letter ^ split[to - 1] === letter) {
    valid += 1
  }
})

console.log(valid)
