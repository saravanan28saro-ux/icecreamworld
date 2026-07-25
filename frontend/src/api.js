const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://your-backend.vercel.app" // Replace with your backend URL

// Get Flavors
export const getFlavors = async () => {
  const response = await fetch(`${API_URL}/flavors`)
  return await response.json()
}

// Get History
export const getHistory = async () => {
  const response = await fetch(`${API_URL}/history`)
  return await response.json()
}

// Get How To Make
export const getHowToMake = async () => {
  const response = await fetch(`${API_URL}/howtomake`)
  return await response.json()
}

// Get Reviews
export const getReviews = async () => {
  const response = await fetch(`${API_URL}/reviews`)
  return await response.json()
}