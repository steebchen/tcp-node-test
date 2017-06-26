var net = require('net')

var server = net.createServer()

server.on('connection', function (socket) {
  console.log('ein client hat sich verbunden')

  socket.on('data', function (data) {
    console.log('empfangene daten vom client:', data.toString())

    socket.write('dies ist die antwort des servers')
  })
})

server.listen({ host: '127.0.0.1', port: 8000 }, function () {
  console.log('warte auf verbindungen auf port', server.address())
})
