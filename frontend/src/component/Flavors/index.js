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


  const getImageUrl = (image) => {
    return `http://localhost:5000/images/${image.replace("./images/", "")}`
  }


  return (
    <MainContainer>

      <Heading>
        Ice Cream Flavors
      </Heading>


      <FlavorsContainer>

        {flavors.map(item => (

          <FlavorButton
            key={item.id}
            onClick={() => setSelectedFlavor(item)}
          >

            <FlavorImage
              src={getImageUrl(item.image)}
              alt={item.name}
            />


            <FlavorName>
              {item.name}
            </FlavorName>

          </FlavorButton>

        ))}

      </FlavorsContainer>



      {selectedFlavor && (

        <Overlay>

          <Popup>

            <CloseButton
              onClick={() => setSelectedFlavor(null)}
            >
              ✕
            </CloseButton>


            <PopupImage
              src={getImageUrl(selectedFlavor.image)}
              alt={selectedFlavor.name}
            />


            <PopupTitle>
              {selectedFlavor.name}
            </PopupTitle>


            <PopupContent>
              {selectedFlavor.content}
            </PopupContent>


          </Popup>

        </Overlay>

      )}

    </MainContainer>
  )
}


export default Flavors