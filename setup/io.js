const socket = require('socket.io');

const server = require('./server');

const io = socket(server);

module.exports = io;
