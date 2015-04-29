var net = require('net')

var server = net.createServer(function(socket) {
  var date = new Date()
  var year = date.getFullYear().toString()
  var preMonth = date.getMonth() + 1
  var month = (preMonth.toString().length == 2) ? preMonth : [0, preMonth].join("")
  var day = (date.getDate().toString().length == 2) ? date.getDate() : [0, date.getDate()].join("")
  var hours = (date.getHours().toString().length == 2) ? date.getHours() : [0, date.getHours()].join("")
  var minutes = (date.getMinutes().toString().length == 2) ? date.getMinutes() : [0, date.getMinutes()].join("")
  socket.write(year + "-" + month + "-" + day + " " + hours + ":" + minutes)
  socket.end()
})

server.listen(Number(process.argv[2]))
