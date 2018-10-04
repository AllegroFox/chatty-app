// server.js

const express = require('express');
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;
const uuidv1 = require('uuid/v1');


// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on port ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected', wss.clients.size);

  let clientCount = {
    username: "System",
    content: wss.clients.size,
    type: "clientCount",
    id: uuidv1()
    }

    wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(clientCount));
      }
    });

  ws.on('message', function incoming(data) {
    let message = JSON.parse(data);
    switch(message.type) {
      case "postMessage":
        Object.defineProperties(message, {
          'id': {
          value: uuidv1(),
          enumerable: true
          },
          'type': {
            value: 'incomingMessage',
            enumerable: true
          }
        });
        break;
      case "postNotification":
        Object.defineProperties(message, {
          'content': {
            value: `has changed their name to ${message.content}`,
            enumerable: true
          },
          'id': {
          value: uuidv1(),
          enumerable: true
          },
          'type': {
            value: 'incomingNotification',
            enumerable: true
          },
          'name': {
            value: message.content,
            enumerable: true
          }
        });
        break;
      default:
        throw new Error("Unknown message type: " + message.type);
    }

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
    console.log(`User ${message.username} says "${message.content}" - id: ${message.id}, type: ${message.type}`);

  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected', wss.clients.size);
      let clientCount = {
        username: "System",
        content: wss.clients.size,
        type: "clientCount",
        id: uuidv1()
        }

      wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(clientCount));
      }
    });

  });
});
