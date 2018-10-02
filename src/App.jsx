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
  }


  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: "3", username: "Michelle", content: "Hello there!"};
      const messages = [...this.state.messages, newMessage];
      console.log(newMessage);
      console.log(messages);
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  addMessage(username, text) {
    const newMessage = {
      username: username,
      content: text,
      id: generateRandomId()
    };
    console.log(newMessage);
    const newMessages = [...this.state.messages, newMessage];
    console.log(newMessages);
    this.setState({ messages: newMessages });
  }

  render() {
    return (

          <div>
            <nav className="navbar">
              <a href="/" className="navbar-brand">Chatty</a>
            </nav>
            <MessageList messages={this.state.messages}/>
            <footer className="chatbar">
              <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage}/>
            </footer>

          </div>

    );
  }
}
export default App;
