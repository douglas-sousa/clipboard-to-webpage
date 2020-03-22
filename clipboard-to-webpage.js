const { clipboardEvent } = require('./cp');
const { getLocalIp } = require('./ip');
const server = require('./setup/server');
const io = require('./setup/io');

io.on('connection', (socket) => {
  // Prevents data from being sent to disconnected users
  socket.on('disconnect', () => {
    socket.removeAllListeners('new-message');
    socket.removeAllListeners('disconnect');
    io.removeAllListeners('connection');
  });

  clipboardEvent.on('new-content', (_content) => {
    io.emit('new-message', { data: _content });
  });
});

const port = 4000;
getLocalIp((localIpAddress) => {
  server.listen(port, () => {
    console.log(`Server running on ${localIpAddress}:${port}`);
  });
});
