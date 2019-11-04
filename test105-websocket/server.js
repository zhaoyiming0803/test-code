const ws = require("nodejs-websocket");

const server = ws.createServer(function (conn) {
  conn.on("text", (str) => {
    conn.sendText(str.toUpperCase())
  })

  conn.on("close", (code, reason) => {
    console.log("Connection closed")
  })
}).listen(3001);