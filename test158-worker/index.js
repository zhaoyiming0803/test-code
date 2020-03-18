const http = require('http')
const fs = require('fs')
const template = fs.readFileSync('./index.html', 'utf-8')
const countScript = fs.readFileSync('./countdown.js', 'utf-8')

const server = http.createServer((req, res) => {
  res.writeHead(200)

  if (req.url === '/index.html') {
    res.end(template)
  } else {
    res.end(countScript)
  }
});

server.listen(3001, () => {
  console.log('server listen at 3001 successfully')
});