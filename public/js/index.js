var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createEmail', {
        text: "Hi"
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(msg) {
    console.log('New Message', msg);
});

socket.emit('createMsg', {
    form: 'Hassan',
    text: 'Hello! My name is Hassan. How are you?'
});

