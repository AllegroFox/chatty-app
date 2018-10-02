
import React, { Component } from "react";

class ChatBar extends Component {
  render() {

    const onSubmit = event => {
      event.preventDefault();
      const usernameInput = event.target.elements.username;
      const messageInput = event.target.elements.messageText;
      // Here, we call the function we were sent
      this.props.addMessage(usernameInput.value, messageInput.value);

      messageInput.value = "";
    };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser}/>
      <input type="text" name="messageText" className="chatbar-message" placeholder="Type a message and press SEND" />
      <input type="submit" className="chatbar-button" value="send"/>
    </form>);
  }
}

export default ChatBar;

