const express = require("express")
const sqlite3 = require("sqlite3")
const {open} = require("sqlite")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(express.json())
app.use(cors())

// Serve images
app.use("/images", express.static(path.join(__dirname, "images")))

const dbPath = path.join(__dirname, "icecream.db")

let db = null

const initializeDB = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
        })

    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000")
    })
  } catch (e) {
    console.log(e.message)
  }
}

initializeDB()

// Home Route
app.get("/", (request, response) => {
  response.send("Ice Cream API")
})

// Get all flavors
app.get("/flavors", async (request, response) => {
  const data = await db.all("SELECT * FROM flavors")
  response.json(data)
})

// Get one flavor
app.get("/flavors/:id", async (request, response) => {
  const {id} = request.params

  const data = await db.get(
    "SELECT * FROM flavors WHERE id = ?",
    [id]
  )

  if (data) {
    response.json(data)
  } else {
    response.status(404).json({message: "Flavor not found"})
  }
})

// Get history
app.get("/history", async (request, response) => {
  const data = await db.all("SELECT * FROM history")
  response.json(data)
})

// Get how to make
app.get("/howtomake", async (request, response) => {
  const data = await db.all("SELECT * FROM howtomake")
  response.json(data)
})

app.get("/reviews", async (request, response) => {
  const data = await db.all("SELECT * FROM reviews")
  response.json(data)
})


