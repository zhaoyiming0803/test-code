const http = require('http')
const fs = require('fs')
const template = fs.readFileSync('./index.html', 'utf-8')

const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.end(template)
})

server.listen(3000, () => {
  console.log('server listen at port 3000 successfully!')
})