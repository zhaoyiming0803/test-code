const http = require("http");
const fs = require("fs");

const publicPath = ".";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  if (req.url === "/favicon.ico") {
    return;
  }
  const file = fs.readFileSync(publicPath + req.url, "utf-8");
  if (req.url === "/1.js") {
    setTimeout(() => {
      res.end(file);
    }, 1000);
  } else {
    res.end(file);
  }
});

server.listen(3000);
