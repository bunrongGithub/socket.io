// This file establishes a WebSocket connection to the server running on localhost at port 4000 using Socket.IO.
const socket = io("http://localhost:4000");

// Just like on server,our soket has an:
    // on method to listen for events
    // emit method to send events
socket.on("welcome", data => {
    console.log(data);
    // sent a message back to the server with the event name "thanks"
    socket.emit("thanks", "Thank you for the welcome message");
})