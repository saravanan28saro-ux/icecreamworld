const API_URL = "http://localhost:3000"

// Get all flavors
export const getFlavors = async () => {
  const response = await fetch(`${API_URL}/flavors`)
  return await response.json()
}

// Get history
export const getHistory = async () => {
  const response = await fetch(`${API_URL}/history`)
  return await response.json()
}

// Get how to make
export const getHowToMake = async () => {
  const response = await fetch(`${API_URL}/howtomake`)
  return await response.json()
}

// Get reviews
export const getReviews = async () => {
  const response = await fetch(`${API_URL}/reviews`)
  return await response.json()
}

// Login
export const login = async (userData) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })

  return await response.json()
}