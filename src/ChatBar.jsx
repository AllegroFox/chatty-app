
import React, { Component } from "react";

class ChatBar extends Component {
  render() {

    const onSubmit = event => {
      event.preventDefault();
      const messageInput = event.target.elements.messageText;
      // Here, we call the function we were sent
      this.props.addMessage(messageInput.value);

      messageInput.value = "";
    };

    const updateUser = event => {
      event.preventDefault();
      const usernameInput = event.target.elements.username;

      this.props.changeUser(usernameInput.value);
    };

  return (
    <span className="chatbar">
      <form onSubmit={updateUser}>
        <input type="text" name="username" className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser}/>
      </form>
      <form onSubmit={onSubmit}>
        <input type="text" name="messageText" className="chatbar-message" placeholder="Type a message and press ENTER" />
      </form>
    </span>)
  }
}

export default ChatBar;

