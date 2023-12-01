import express from "express"
const server = express()

import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 3000

import { getUser, loginUser,registerUser, updateUserProperty } from "./modules/User/user.controller"
import { createWordsByTopic, getWords, updateWordProperty } from "./modules/Word/word.controller"


// Middleware

import morgan from "morgan"
server.use(morgan('dev'))

import cors from "cors"
server.use(cors())

server.use(express.json())


// Define your routes here

server.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await getUser(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the user" });
  }
})

server.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const userId = await loginUser(email, password);
    res.json(userId);
  } catch (error) {
    res.status(400).json({ error: "An error occurred while logging in" });
  }
})

server.patch("/users/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    if (!req.body.key || req.body.value === undefined) {
      res.status(400).json({ error: "Key or value not provided" });
      return
    }

    const user = await updateUserProperty(userId, req.body.key, req.body.value);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "An error occurred updating a user property" });
  }
})

server.get("/users/:id/words", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await getWords(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the user" });
  }
})


server.patch("/words/:wordId", async (req, res) => {
  const wordId = parseInt(req.params.wordId)
  try {
    if (!req.body.key || req.body.value === undefined) {
      res.status(400).json({ error: "Key or value not provided" });
      return
    }

    const word = await updateWordProperty(wordId, req.body.key, req.body.value);
    res.json(word);
  } catch (error) {
    res.status(500).json({ error: "An error occurred updating a user property" });
  }
})

server.post("/users/:id/topic", async (req, res) => {
  const userId = req.params.id;
  const topic = req.query.topic as string
  // try {
    const newWords = await createWordsByTopic(userId, topic);
    res.status(201).json(newWords);
  // } 
  // catch (error) {
  //   res.status(500).json({ error: "An error occurred creating new words by topic" });
  // }
})

server.post("/users", async (req, res) => {
  const user = req.body;
  try {
    const createdUserId = await registerUser(user);
    res.status(201).json(createdUserId);
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

