
import React, { Component } from "react";
import Message from "./Message.jsx";


class MessageList extends Component {

  render() {
    const messageItems = this.props.messages.map(message => (
      <Message message={message} key={message.id} messageType={message.type}/>
    ));
    return (
      <main className="messages">

        <div className="message">
          {messageItems}
        </div>

      </main>

    );
  }
}

export default MessageList;




// <div class="message">
//   <span class="message-username">Anonymous1</span>
//   <span class="message-content">I won't be impressed with technology until I can download food.</span>
// </div>
// <div class="message system">
//   Anonymous1 changed their name to nomnom.
// </div>


// state.messages = [
//   {
//     type: "incomingMessage",
//     content: "I won't be impressed with technology until I can download food.",
//     username: "Anonymous1"
//   }