import { WebSocketServer } from "ws";
import { client } from "@repo/prisma/client";

const server = new WebSocketServer({
  port: 8081,
});

server.on("connection", async (ws) => {
  console.log("New client connected");

  await client.user.create({
    data: {
      username: `${Math.random().toString()} websocket_user`,
      password: "securepassword",
    },
  });

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
    // Echo the message back to the client
    ws.send(`Echo: ${message}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
