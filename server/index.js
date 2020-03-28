const express = require('express');
const http = require('http');
const app = express();
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);
const { addUser, removeUser, getUser } = require('./users');
const PORT = process.env.PORT || 5000;

io.on('connection', socket => {
  socket.on('join', ({ user, room }, callback) => {
    addUser({ id: socket.id, name: user, room });
    socket.join(room);
    socket.emit('welcomeMessage', {
      user: 'Admin',
      message: `${user} Welcome to our room`
    });

    io.to(room).emit('adminInfo', {
      user: 'Admin',
      message: `${user} has joined`
    });
    callback();
  });
  socket.on('sendMessage', data => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', {
      user: user.name,
      message: data.message
    });
  });
  socket.on('disconnect', () => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', {
      user: 'Admin',
      message: `${user.name} has left!!!`
    });
    removeUser(user.id);
  });
});

server.listen(PORT, () => {
  console.log(`Serves has been started on port: ${PORT}`);
});
