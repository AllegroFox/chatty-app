# chatty-app

A simple chat client using React and WebSockets.

## Screenshots

![Screenshot of chat client](https://raw.githubusercontent.com/AllegroFox/chatty-app/master/Docs/Chatty.png)

## Getting Started

All dependencies can be found in the  client package.json - this way you should only need to run `npm install` once.

1. Clone the repo into a local directory and cd into chatty-client (`cd chatty-client`).
2. Install dependencies using the `npm install` command. 
3. Start the chat client using the `npm start` command. The app will be served at <http://localhost:3000/>.

To run the websocket server:
4. Open a new terminal window (cmd-n)
5. cd into the chatty-app folder, and again into `chatty-server`
6. Run the WebSocket server with `node server.js` 
7. Go to <http://localhost:3000/> in your browser.

## Dependencies

- Express 4.16.3,
- React 15.4.2,
- React-DOM 15.4.2,
- uuid ^3.3.2,
- ws 6.0.0,
- Node 5.10.x or above
