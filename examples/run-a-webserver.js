const http = require("http");

const requestListener = (req, res) => {
  res.end("Hallo Web-Programming-Lab!");
};

const server = http.createServer(requestListener);

server.listen(4566, () => console.log("Server started."));
