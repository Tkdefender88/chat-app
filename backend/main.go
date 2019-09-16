package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Tkdefender88/chat-app/backend/pkg/websocket"
)

func setupRoutes() {
	http.HandleFunc("/ws", serveWs)
}

func serveWs(w http.ResponseWriter, r *http.Request) {
	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		log.Println(err)
		return
	}

	go websocket.Reader(ws)
	websocket.Writer(ws)
}

func main() {
	fmt.Println("Chat App v0.0.1")
}
