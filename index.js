const http = require('http');

function suma(a, b) {
  return a + b;
}

http.createServer((req, res) => {
  res.end('Hola, bienvenido a Docker'); 
}).listen(3000);

module.exports = { suma };

