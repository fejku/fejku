// note, io(<port>) will create a http server for you
import * as socketIO from 'socket.io'; // = require('socket.io')(3000);

const io = socketIO(3000);

io.on('connection', function (socket) {
  // io.emit('this', { will: 'be received by everyone'});

  // socket.on('private message', function (from, msg) {
  //   console.log('I received a private message by ', from, ' saying ', msg);
  // });

  socket.on('ghost start', function () {
    console.log('I received a message');
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });
});
