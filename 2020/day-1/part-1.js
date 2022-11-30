let list = require('./list.json')

const listLength = list.length
let i, j
for (i = 0; i < listLength; i += 1) {
  for (j = 0; j < listLength; j += 1) {
    if (list[i] + list[j] === 2020) {
      console.log(list[i] * list[j])
      return
    }
  }
}
