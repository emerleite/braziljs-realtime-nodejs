var http = require('http'),
    fileSystem = require('fs'),
    path = require('path'),
    util = require('util');

var server = http.createServer(function(request, response) {
 var filePath = path.join(__dirname, 'musica.mp3');
 var stat = fileSystem.statSync(filePath);
 
 var inicio = 0;
 var fim = 0;

 var range = request.headers.range;
 console.log(range);

  if (range) {
		inicio = parseInt(range.slice(range.indexOf("bytes=") + 6, range.indexOf("-")));
		fim = parseInt(range.slice(range.indexOf("-") + 1, range.length));    
  }

  if (isNaN(fim) || fim == 0) {
    fim = stat.size-1;
  }

  if (inicio > fim) return;

 response.writeHead(206, {
   'Content-Type': 'audio/mpeg',
   'Content-Length': stat.size,
   'Content-Range':'bytes '+ inicio + '-' + fim + '/' + stat.size,
   'Transfer-Encoding':'chunked'
 });

 var readStream = fileSystem.createReadStream(filePath, { flags: 'r', start: inicio, end: fim});

 util.pump(readStream, response);
});

server.listen(2000);

