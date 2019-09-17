let socket = new WebSocket("ws://localhost:8080/ws")

let connect = cb => {
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("connection successful");
    };

    socket.onmessage = msg => {
        console.log(msg);
        cb(msg);
    }

    socket.onclose = event => {
        console.log("Socket connection closed: ", event);
    };

    socket.onerror = err => {
        console.log("Socket error: ", err)
    };
};

let sendMsg = msg => {
    console.log("sending message: ", msg);
    socket.send(msg);
};

export { connect, sendMsg };