const ws = require('nodejs-websocket')
let count = 0
const server = ws.createServer(function (conn) {
  conn.on("text", function (str) {
    console.log("Received " + str)
    setInterval(() => {
      count++
      conn.sendText(count + '')
    }, 1000)
  })
  conn.on("close", function (code, reason) {
    console.log("Connection closed", code, reason)
  })
}).listen(3000)

// const net = require('net')
// let buffer = Buffer.alloc(0)

// const server = net.createServer(socket => {
//   socket.on('readable', () => {
//     var _buffer, temp
//     // Fetches the data
//     _buffer = socket.read()
//     if (!_buffer) {
//       // Waits for more data
//       return
//     }

//     buffer = Buffer.concat([buffer, _buffer], buffer.length + _buffer.length)

//     console.log(buffer.toString())
//   })
// }).listen(3000)