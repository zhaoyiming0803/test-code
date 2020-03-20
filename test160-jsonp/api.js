const http = require('http')

const server = http.createServer((req, res) => {
  // /?a=1&b=2&c=3&callback=printInfo
  const query = {}
  req.url.slice(2).replace(/([a-z]+)=(\w+)/g, ($0, $1, $2) => {
    query[$1] = $2
  })

  res.writeHead(200)
  res.end(`${query.callback}` + '(' + JSON.stringify({
    name: 'zhaoyiming',
    age: 18
  }) + ')')
})

server.listen(3001, () => {
  console.log('server listen at port 3001 successfully!')
})