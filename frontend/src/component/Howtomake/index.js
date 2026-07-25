import {useEffect, useState} from "react"
import {getHowToMake} from "../../api"

import {
  MainContainer,
  Heading,
  StepsContainer,
  StepCard,
  StepNumber,
  StepContent,
} from "./styledComponents"

const HowToMake = () => {
  const [howToMake, setHowToMake] = useState([])

  useEffect(() => {
    loadSteps()
  }, [])

  const loadSteps = async () => {
    const data = await getHowToMake()
    setHowToMake(data)
  }

  return (
    <MainContainer>
      <Heading>How to Make Ice Cream</Heading>

      <StepsContainer>
        {howToMake.map(item => (
          <StepCard key={item.steps}>
            <StepNumber>Step {item.steps}</StepNumber>

            <StepContent>{item.content}</StepContent>
          </StepCard>
        ))}
      </StepsContainer>
    </MainContainer>
  )
}

export default HowToMake