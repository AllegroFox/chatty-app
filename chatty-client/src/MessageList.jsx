
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
