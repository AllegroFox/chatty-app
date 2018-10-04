import React, {Component} from 'react';
import { generateRandomId } from "./helpers";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";

class App extends Component {

  constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.state = { messages : [],
                   currentUser : "Anonymous",
                   usersOnline : ''};

    this.addMessage = this.addMessage.bind(this);
    this.changeuser = this.changeUser.bind(this);
    this.socket = null;
  }


  componentDidMount() {

    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = function(event) {
      console.log(`Connected to server at localhost:3001`);
    };

  // Handle all messages coming from the Websocket server
    this.socket.onmessage = event => {
      const message = JSON.parse(event.data);

      switch(message.type) {
        case "clientCount":
          console.log(message);

          const clientCount = {
            username: "System",
            content: ` ${message.content} user(s) connected`,
            type: message.type,
            id: message.id
          };

          const newCount = [...this.state.messages, clientCount];
          this.setState({ messages: newCount,
                          usersOnline: message.content });
          break;

        case "incomingNotification":

          console.log(message);

          const newNotification = [...this.state.messages, message];
          this.setState({ messages: newNotification,
                          currentUser: message.name });
          break;

        case "incomingMessage":

          console.log(message);

          const newMessages = [...this.state.messages, message];
          this.setState({ messages: newMessages, });

          break;

        default:
          throw new Error("Unknown message type: " + message.type);
      }
    }
  }

// addMessage and changeUser are called from the ChatBar input
  addMessage(text) {
    const newMessage = {
      username: this.state.currentUser,
      content: text,
      type: "postMessage"
    };
    this.socket.send(JSON.stringify(newMessage));
  }

  changeUser(name) {
    const userNotification = {
      username: this.state.currentUser,
      content: name,
      type: "postNotification"
    };
    this.socket.send(JSON.stringify(userNotification));
  }


  render() {
    return (

          <div>
            <nav className="navbar">
              <a href="/" className="navbar-brand">Chatty</a>
              <span className="usersOnline">{this.state.usersOnline} user(s) online</span>
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
