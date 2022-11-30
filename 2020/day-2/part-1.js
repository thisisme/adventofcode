const input = require('./list.json')

let valid = 0

input.forEach(string => {
  const parts = string.split(' ')
  const times = parts[0].split('-')
  const from = Number(times[0])
  const to = Number(times[1])
  const letter = parts[1].substring(0, 1)
  const password = parts[2]
  const regexp = new RegExp(`${letter}`, 'gi')
  const found = (password.match(regexp) || [])
  if (found && found.length >= from && found.length <= to) {
    valid += 1
  }
})

console.log(valid)
