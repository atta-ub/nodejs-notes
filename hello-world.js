const http = require("node:http");

const assert = require("node:assert").strict;
// const assert = require("node:assert/strict");

assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, "3"]], 4, 5]);

const hostname = "127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World! \n");
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
