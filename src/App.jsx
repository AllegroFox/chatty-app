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
  }

  render() {
    return (

          <div>
            <nav className="navbar">
              <a href="/" className="navbar-brand">Chatty</a>
            </nav>
            <MessageList messages={this.state.messages}/>
            <footer className="chatbar">
              <ChatBar currentUser={this.state.currentUser} />
            </footer>

          </div>

    );
  }
}
export default App;
