var fs = require('fs')

var list = process.argv[2]
var filterFile = process.argv[3]

fs.readdir( list, function (err, data)  {
  if (err) {
    throw err
  }

  for (i=0; i < list.length; i++) {
    var originalPath = data[i]
    if (originalPath) {
      var stringPath = data[i].split(".");
      if (stringPath[1] === filterFile) {
        console.log(originalPath)
      }
    }
  }
});
