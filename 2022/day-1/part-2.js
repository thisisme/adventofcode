var fs = require('fs');
var path = require('path');
var readStream = fs.createReadStream(path.join(__dirname, './') + '/list.txt', 'utf8');
let data = ''
readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    const arr = data.split(/\n\n/)
    const calories = []
    arr.forEach(a => {
      const cal = a.split(/\n/).reduce((acc, val) => Number(acc) + Number(val), 0)
      calories.push(cal)
    })
    calories.sort((a, b) => b - a)
    const top3 = calories.slice(0, 3)
    console.log(top3.reduce((acc, val) => acc + val, 0))
});
