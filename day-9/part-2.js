const input = require('./input.json')

const lookingFor = 1492208709

const findSum = (list) => {
  const listLength = list.length
  let i, j
  for (i = 0; i < listLength; i += 1) {
    for (let j = 2; j < listLength - 1; j += 1) {
      let tmp = list.slice(i, j)
      const sum = tmp.reduce((acc, v) => acc + v, 0)
      if (sum === lookingFor) {
        tmp.sort((a, b) => {
          return a - b
        })
        console.log(tmp[0], tmp[tmp.length - 1])
        console.log(tmp[0] + tmp[tmp.length - 1])
        return
      }
    }
  }
}

findSum(input)
