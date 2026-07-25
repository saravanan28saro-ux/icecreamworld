import {useNavigate} from "react-router-dom"

import {
  MainContainer,
  ContentContainer,
  Heading,
  Description,
  Button,
  Image,
} from "./styledComponents"

const Home = () => {
  const navigate = useNavigate()

  return (
    <MainContainer>
       <Image
        src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800"
        alt="Ice Cream"
      />
      <ContentContainer>
        <Heading>Welcome to Ice Cream World 🍦</Heading>

        <Description>
          Discover delicious ice cream flavors from around the world. Learn
          about the history of ice cream, explore exciting flavors, read user
          reviews, and even learn how to make your own homemade ice cream.
        </Description>

        <Button onClick={() => navigate("/flavors")}>
          Explore Flavors
        </Button>
      </ContentContainer>

     
    </MainContainer>
  )
}

export default Home