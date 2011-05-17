var connect = require('connect');

var server = connect.createServer(
    connect.favicon()
  , connect.logger()
  , connect.static(__dirname + '/public')
);

server.listen(8000);
