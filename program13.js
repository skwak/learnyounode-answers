var server = http.createServer(function(req, res) {
  if (req['method'] == 'GET') {
    var parsedURL = url.parse(req.url, true)

    if (parsedURL['pathname'] == '/api/parsetime') {
      var time = new Date(parsedURL['query']['iso'])
      var hours = time.getHours()
      var minutes = time.getMinutes()
      var seconds = time.getSeconds()
      var jsonHash = { "hour": hours, "minute": minutes, "second": seconds }
      res.writeHead(200, { 'Content-Type': 'application/json'})
      res.end(JSON.stringify(jsonHash))
    }

    else if (parsedURL['pathname'] == '/api/unixtime') {
      var ms = new Date(parsedURL['query']['iso']).getTime()
      var jsonTime = { "unixtime": ms }
      res.writeHead(200, { 'Content-Type': 'application/json'})
      res.end(JSON.stringify(jsonTime))
    }
  }
})

server.listen(process.argv[2])
