const express = require("express")
const sqlite3 = require("sqlite3")
const { open } = require("sqlite")
const path = require("path")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const dbPath = path.join(__dirname, "icecream.db")

let db = null

const initializeDB = async () => {
  db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  })

  app.get("/flavors", async (req, res) => {
  const data = await db.all("SELECT * FROM flavors")
  res.json(data)
})

app.get("/history", async (req, res) => {
  const data = await db.all("SELECT * FROM history")
  res.json(data)
})

app.get("/howtomake", async (req, res) => {
  const data = await db.all("SELECT * FROM howtomake")
  res.json(data)
})

app.get("/reviews", async (req, res) => {
  const data = await db.all("SELECT * FROM reviews")
  res.json(data)
})

  app.listen(3000, () => {
    console.log("Server Started")
  })
}

initializeDB()