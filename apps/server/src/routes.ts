import express from "express"
const server = express()

import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 3000

// Define your routes here

server.get("/", (req, res) => {
  console.log("Root route")
  res.send("Root route")
})




export default function startServer(): void {
  server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
  }

