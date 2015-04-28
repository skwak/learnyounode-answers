var fs = require('fs')

var fileThing = process.argv[2]

fs.readFile(fileThing, function( err, data) {
  if (err) {
    throw err
  }
  console.log(data.toString().split("\n").length-1)
});
