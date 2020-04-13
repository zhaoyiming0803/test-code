const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/plain");
    // res.setHeader("Content-Length", 10);
    res.setHeader("Content-Length", 7);
    // res.setHeader("Content-Length", 12); // error
    res.write("helloworld");
  }
});

server.listen(8081, () => {
  console.log("application listen at 8081");
});
