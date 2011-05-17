var http = require('http');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type' : 'text/plain',
    'Transfer-Encoding':'chunked'
  });
  var contador = 0;
  var chunkInterval = setInterval(function () {
    res.write('Resposta Chunked ' + contador + '\n');
    contador++;
  }, 100);

  setTimeout(function () {
    clearInterval(chunkInterval);
    res.end('Fim\n');
  }, 10000);  

});

server.listen(8000);
