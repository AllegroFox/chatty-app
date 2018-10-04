import React, {Component} from 'react';
import { generateRandomId } from "./helpers";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";

class App extends Component {

  constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.state = { messages : [

      {
      username: "Bob",
      content: "Has anyone seen my marbles?",
      id: "1"
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
      id: "2"
    }

    ], currentUser : "Anonymous"};

    this.addMessage = this.addMessage.bind(this);
    this.changeuser = this.changeUser.bind(this);
    this.socket = null;
  }


  componentDidMount() {

    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = function(event) {
      console.log(`Connected to server at localhost:3001`);
    };

  }

  addMessage(text) {
    const newMessage = {
      username: this.state.currentUser,
      content: text,
      type: "postMessage"
    };
    this.socket.send(JSON.stringify(newMessage));

    this.socket.onmessage = event => {
      const msg = JSON.parse(event.data);
      console.log(msg);

      const newMessages = [...this.state.messages, msg];
      this.setState({ messages: newMessages });
    }

  }

  changeUser(name) {
    const userNotification = {
      username: this.state.currentUser,
      content: name,
      type: "postNotification"
    };
    this.socket.send(JSON.stringify(userNotification));

    this.socket.onmessage = event => {
      const userNote = JSON.parse(event.data);
      console.log(userNote);

      const newNotification = [...this.state.messages, userNote];
      this.setState({ messages: newNotification,
                      currentUser: name });
    }
  }

  render() {
    return (

          <div>
            <nav className="navbar">
              <a href="/" className="navbar-brand">Chatty</a>
            </nav>
            <MessageList messages={this.state.messages}/>
            <footer className="chatbar">
              <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} changeUser={this.changeuser}/>
            </footer>

          </div>

    );
  }
}
export default App;
