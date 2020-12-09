let list = require('./list.json')

console.time('count')
const listLength = list.length
let i, j, k
list.sort((a, b) => {
  return a - b
})
for (i = 0; i < listLength; i += 1) {
  if (i > 0 && list[i] === list[i - 1]) continue
  for (j = 0; j < listLength; j += 1) {
    if (list[i] + list[j] >= 2020) break
    if (j > 0 && list[j] === list[j - 1]) continue
    for (k = 0; k < listLength; k += 1) {
      const sum = list[i] + list[j] + list[k]
      if (sum > 2020) break
      if (sum === 2020) {
        console.timeEnd('count')
        console.log(list[i] * list[j] * list[k])
        return
      }
    }
  }
}
