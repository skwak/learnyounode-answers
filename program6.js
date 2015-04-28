var filterModule = require('./module-p6.js')
var realPath = process.argv[2]
var extension = process.argv[3]

filterModule(realPath, extension, function callback (err, files) {
  if (err) {
    console.log("This error occurred: " + err)
  }
  files.forEach(function (file) {
    console.log(file)
  });
});
