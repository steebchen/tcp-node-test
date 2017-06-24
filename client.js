var net = require('net')

var server = net.createConnection({
  host: '127.0.0.1',
  port: 8000
}, function (data) {
  console.log('zum server verbunden')
})

process.stdin.on('data', function (data) {
  server.write(data.toString())
})
