import express from "express"
const server = express()

import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 3000

import { getUser, registerUser } from "./modules/User/user.controller"


// Middleware

import morgan from "morgan"
server.use(morgan('dev'))

import cors from "cors"
server.use(cors())

server.use(express.json())


// Define your routes here

server.get("/users/:id", async (req, res) => {
  const email = req.params.id;
  try {
    const user = await getUser(email);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the user" });
  }
})

server.post("/users", async (req, res) => {
  const user = req.body;
  try {
    const createdUser = await registerUser(user);
    res.json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating the user" });
  }
})

server.get("/", (_, res) => {
  console.log("Root route")
  res.send("Root route")
})


export default function startServer(): void {
  server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
  }

