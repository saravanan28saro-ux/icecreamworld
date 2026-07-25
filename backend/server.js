const express = require("express")
const sqlite3 = require("sqlite3")
const { open } = require("sqlite")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: [
      "https://icecreamworld-lq6z-545jp7wjh-saravanans-projects-effc06f0.vercel.app/",
      "http://localhost:3000"
    ]
  })
)


// Serve images
app.use(
  "/images",
  express.static(path.join(__dirname, "images"))
)


// Database path
const dbPath = path.join(__dirname, "icecream.db")

let db = null


// Initialize database
const initializeDB = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })

    console.log("Database Connected")
  } catch (error) {
    console.log("Database Error:", error.message)
  }
}

initializeDB()


// Home route
app.get("/", (request, response) => {
  response.send("Ice Cream API Running")
})


// Get all flavors
app.get("/flavors", async (request, response) => {
  try {
    const data = await db.all("SELECT * FROM flavors")
    response.json(data)
  } catch (error) {
    response.status(500).json({
      error: error.message,
    })
  }
})


// Get single flavor
app.get("/flavors/:id", async (request, response) => {
  try {
    const { id } = request.params

    const data = await db.get(
      "SELECT * FROM flavors WHERE id = ?",
      [id]
    )

    if (data) {
      response.json(data)
    } else {
      response.status(404).json({
        message: "Flavor not found",
      })
    }
  } catch (error) {
    response.status(500).json({
      error: error.message,
    })
  }
})


// History
app.get("/history", async (request, response) => {
  try {
    const data = await db.all("SELECT * FROM history")
    response.json(data)
  } catch (error) {
    response.status(500).json({
      error: error.message,
    })
  }
})


// How to make
app.get("/howtomake", async (request, response) => {
  try {
    const data = await db.all("SELECT * FROM howtomake")
    response.json(data)
  } catch (error) {
    response.status(500).json({
      error: error.message,
    })
  }
})


// Reviews
app.get("/reviews", async (request, response) => {
  try {
    const data = await db.all("SELECT * FROM reviews")
    response.json(data)
  } catch (error) {
    response.status(500).json({
      error: error.message,
    })
  }
})


// Start server locally
if (require.main === module) {
  app.listen(5000, () => {
    console.log("Server running at http://localhost:5000")
  })
}


// Export for Vercel
module.exports = app