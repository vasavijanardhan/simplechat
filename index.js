const http = require('http');
const app = require('express')();
const port = process.env.port||5000;

const server = http.createServer(app, (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log("Simple chat")
});

server.listen(port, () => {
  console.log('Server running at ' +port);
});