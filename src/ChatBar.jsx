
import React, { Component } from "react";

class ChatBar extends Component {
  render() {

    const onSubmit = event => {
      event.preventDefault();
      const messageInput = event.target.elements.messageText;
      //call the addMessage function (in App)
      this.props.addMessage(messageInput.value);

      messageInput.value = "";
    };

    const updateUser = event => {
      event.preventDefault();
      const usernameInput = event.target.elements.username;
      //call the changeUser function (in App)
      this.props.changeUser(usernameInput.value);
    };

  return (
    <span className="chatbar">
      <form onSubmit={updateUser} className="chatbar-username">
        <input type="text" name="username" className="message-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser.username}/>
      </form>
      <form onSubmit={onSubmit} className="chatbar-message">
        <input type="text" name="messageText" className="message-content" placeholder="Type a message and press ENTER" />
      </form>
    </span>)
  }
}

export default ChatBar;

