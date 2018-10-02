
import React, { Component } from "react";

class ChatBar extends Component {
  render() {

  return (
    <form>
      <input type="text" className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser}/>
      <input type="text" className="chatbar-message" placeholder="Type a message and press SEND" />
      <input type="submit" className="chatbar-button" value="send"/>
    </form>);
  }
}

export default ChatBar;

// <footer class="chatbar">
//   <input class="chatbar-username" placeholder="Your Name (Optional)" />
//   <input class="chatbar-message" placeholder="Type a message and hit ENTER" />
// </footer>