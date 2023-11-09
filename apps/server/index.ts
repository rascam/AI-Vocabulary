// import startServer from "./src/routes.ts"


// startServer()

import express from "express"
const server = express()

import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 3000

// Define your routes here

server.get("/test", (req, res) => {
  console.log("Hello World!")
  res.send("Hello World!")
})

server.get("/", (req, res) => {
  console.log("Root route")
  res.send("Root route")
})

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

