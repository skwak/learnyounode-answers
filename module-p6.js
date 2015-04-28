var fs = require('fs'),
    path = require('path'),
    fileList = [];

module.exports = function(realPath, extension, callback) {
  fs.readdir(realPath, function(err, files) {
    if (err) return callback(err, null);
    //if there's no error, then filter the files
    files.forEach(function (file) {
      if (path.extname(file) === '.' + extension) {
        fileList.push(file);
      }
    });
    callback(null, fileList);
  });
};
