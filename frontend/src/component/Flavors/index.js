import {useEffect, useState} from "react"
import {getFlavors} from "../../api"

import {
  MainContainer,
  Heading,
  FlavorsContainer,
  FlavorButton,
  FlavorImage,
  FlavorName,
  Overlay,
  Popup,
  PopupImage,
  PopupTitle,
  PopupContent,
  CloseButton,
} from "./styledComponents"

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

  return (
    <MainContainer>
      <Heading>Ice Cream Flavors</Heading>

      <FlavorsContainer>
        {flavors.map(item => (
          <FlavorButton
            key={item.id}
            onClick={() => setSelectedFlavor(item)}
          >
            <FlavorImage
              src={`http://localhost:3000/${item.image.replace("./", "")}`}
              alt={item.name}
            />
            <FlavorName>{item.name}</FlavorName>
          </FlavorButton>
        ))}
      </FlavorsContainer>

      {selectedFlavor && (
        <Overlay>
          <Popup>
            <CloseButton onClick={() => setSelectedFlavor(null)}>
              ✕
            </CloseButton>

            <PopupImage
              src={`http://localhost:3000/${selectedFlavor.image.replace("./", "")}`}
              alt={selectedFlavor.name}
            />

            <PopupTitle>{selectedFlavor.name}</PopupTitle>

            <PopupContent>{selectedFlavor.content}</PopupContent>
          </Popup>
        </Overlay>
      )}
    </MainContainer>
  )
}

export default Flavors