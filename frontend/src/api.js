const API_URL = process.env.REACT_APP_API_URL

export const getFlavors = async () => {
  const response = await fetch(`${API_URL}/flavors`)
  return response.json()
}

export const getHistory = async () => {
  const response = await fetch(`${API_URL}/history`)
  return response.json()
}

export const getHowToMake = async () => {
  const response = await fetch(`${API_URL}/howtomake`)
  return response.json()
}

export const getReviews = async () => {
  const response = await fetch(`${API_URL}/reviews`)
  return response.json()
}