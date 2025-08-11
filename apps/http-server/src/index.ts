import express from "express";
import { client } from "@repo/prisma/client";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });

  return res.json({
    message: "User created successfully",
    user,
  });
});

app.listen(8080, () => {
  console.log("HTTP Server is running on http://localhost:8080");
});
