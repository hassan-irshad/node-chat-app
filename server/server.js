const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 5000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('New User connected');

    socket.on('disconnect', () => {
        console.log('Disconnected from client');
    });

    socket.emit('newMessage', {
        from: 'Hassan',
        text: 'Hello'
    });
    
    socket.on('createMsg', function(msg) {
        console.log(msg);
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});