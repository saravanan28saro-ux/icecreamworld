import {useEffect, useState} from "react"
import {getFlavors} from "../api"

const Flavors = () => {
  const [flavors, setFlavors] = useState([])
  const [selectedFlavor, setSelectedFlavor] = useState(null)

  useEffect(() => {
    loadFlavors()
  }, [])

  const loadFlavors = async () => {
    const data = await getFlavors()
    setFlavors(data)
  }

  const handleFlavorClick = flavor => {
    setSelectedFlavor(flavor)
  }

  const closePopup = () => {
    setSelectedFlavor(null)
  }

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Ice Cream Flavors</h1>

      <div
        style={{
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {flavors.map(item => (
          <button
            key={item.id}
            onClick={() => handleFlavorClick(item)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "none",
              background: "white",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                border: "5px solid #ccc",
                padding: "10px",
                objectFit: "cover",
              }}
            />

            <h2>{item.name}</h2>
          </button>
        ))}
      </div>

      {/* Popup */}
      {selectedFlavor && (
        <div style={overlayStyle}>
          <div style={popupStyle}>
            <button
              onClick={closePopup}
              style={closeButton}
            >
              ✖
            </button>

            <img
              src={selectedFlavor.image}
              alt={selectedFlavor.name}
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />

            <h2>{selectedFlavor.name}</h2>

            <p>{selectedFlavor.content}</p>
          </div>
        </div>
      )}
    </div>
  )
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const popupStyle = {
  background: "#fff",
  width: "500px",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  position: "relative",
}

const closeButton = {
  position: "absolute",
  top: "10px",
  right: "10px",
  border: "none",
  background: "red",
  color: "white",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  cursor: "pointer",
}

export default Flavors;