var fs = require('fs')

var fileThing = process.argv[2]

var file = fs.readFileSync(fileThing)

console.log(file.toString().split("\n").length-1)
