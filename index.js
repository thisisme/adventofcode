const fs = require('fs')

const getDirectories = path => {
  return fs.readdirSync(path)
    .filter(file => !file.match(/^[.]/))
    .filter((file) => {
      return fs.statSync(`${path}/${file}`).isDirectory()
  })
}

console.log(getDirectories('./'))