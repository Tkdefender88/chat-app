import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from './components/Header/Header';
import ChatHistory from "./components/ChatHistory/ChatHistory";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {ChatHistory: []}; 
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New message");
      this.setState(prevState => ({
        ChatHistory: [...this.state.ChatHistory, msg]
      }))
      console.log(this.state);
    })
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ChatHistory ChatHistory={this.state.ChatHistory} />
        <button onClick={this.send}>
          Hit
        </button>
      </div>
    );
  }
}

export default App;
