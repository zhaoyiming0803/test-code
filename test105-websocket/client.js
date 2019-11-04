const http = require('http');
const fs = require('fs');

const client = http.createServer((req, res) => {
  const template = fs.readFileSync('./index.html');
  res.writeHead(200);
  res.end(template);
});

client.listen(3000);