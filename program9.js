var http = require('http')
var urls = [process.argv[2], process.argv[3], process.argv[4]]
var textArray = []
var textHash = {}

for (var index in urls) {
  getData(urls[index], index);
}

function getData(url, index) {
  http.get(url, function(response) {
    response.setEncoding('utf8')
      var str = ''
    response.on('data', function(chunk) {
      str+=chunk
    })
    response.on('end', function() {
      textHash[index] = str
      if (Object.keys(textHash).length == 3) {
        for(i=0; i<3; i++) {
          console.log(textHash[i])
        }
      }
    })
  })
}
