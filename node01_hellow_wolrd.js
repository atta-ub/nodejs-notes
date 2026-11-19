const { createServer } = require("node:http");

const hostnam = "127.0.0.1";
const port = 3000;
const server = createServer((require, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hellow World");
});

server.listen(port, hostnam, () => {
  console.log(`Server is running at http://${hostnam}:${port}`);
});
