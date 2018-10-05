
import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.messageType === "incomingMessage") {
    return (
      <div className="message" key={this.props.message.id}>
        <span className="message-username">{this.props.message.username}</span>
        <span className="message-content">{this.props.message.content}</span>
      </div>
      );
    } else {
      return (
      <div className="message" key={this.props.message.id}>
        <span className="message-system">{this.props.message.username}</span>
        <span className="message-system">{this.props.message.content}</span>
      </div>
      );
    }

  }

};

export default Message;
