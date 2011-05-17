var connect = require('connect');
var io = require('socket.io');
var spawn = require('child_process').spawn;

var app = connect.createServer(
    connect.favicon()
  , connect.logger()
  , connect.static(__dirname + '/public')
);
app.listen(8001);

var socket = io.listen(app, {flashPolicyServer: false});

var tail = spawn('tail', ['-f', './nohup.out']);

tail.stdout.on('data', function (data) {
  socket.broadcast(data.toString('utf8'));
});
