const API_URL = "https://icecreamworld.onrender.com"


// Get flavors
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