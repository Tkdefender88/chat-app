let socket = new WebSocket("ws://localhost:8080/ws")

let connect = () => {
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("connection successful");
    };

    socket.onmessage = msg => {
        console.log(msg);
    }

    socket.onclose = event => {
        console.log("Socket connection closed: ", event);
    };

    socket.onerror = err => {
        console.log("Socket error: ", err)
    }
};