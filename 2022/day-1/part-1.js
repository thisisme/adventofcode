var fs = require('fs');
var path = require('path');
var readStream = fs.createReadStream(path.join(__dirname, './') + '/list.txt', 'utf8');
let data = ''
readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    const arr = data.split(/\n\n/)
    const calories = []
    let largest = 0
    arr.forEach(a => {
      calories.push(a.split(/\n/))
      let larger = calories[calories.length-1].reduce((acc, val) => Number(acc) + Number(val), 0)
      if (larger > largest) {
        largest = larger
      }
    })
    console.log(largest)
});
