// This file sets up an Express server that serves static files from the "public" directory
// and initializes a Socket.IO server to handle WebSocket connections.

const express = require('express');
const app = express();
const port = 4000;
app.use(express.static("public"));
const expressServer = app.listen(port, ()=> {console.log("Server is running on port 4000")});

const socketio = require('socket.io');
const io = socketio(expressServer,{});
// on is a regular event listener that listens for the connection event.
io.on("connect", socket=> {
    console.log(socket.id, " has joind the server");
    // 1st arg or emit is the event name, 2nd arg is the data to send
    socket.emit("welcome", [1,2,3,4,5]);  // push an event to the client or browser
    // listen for the event from the client e.i. (thanks)
    socket.on("thanks", data => console.log(data)
    )
})