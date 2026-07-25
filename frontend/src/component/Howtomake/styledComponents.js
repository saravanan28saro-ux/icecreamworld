import styled from "styled-components"

export const MainContainer = styled.div`
  min-height: 100vh;
  padding: 40px;
  background-color: #f8f8f8;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`

export const Heading = styled.h1`
  text-align: center;
  color: #1e293b;
  font-size: 42px;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`

export const StepsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 15px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

export const StepCard = styled.div`
  width: 300px;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 260px;
    padding: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    max-width: 350px;
    padding: 18px;
  }
`

export const StepNumber = styled.h2`
  color: #2563eb;
  margin-bottom: 10px;
  font-size: 26px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`

export const StepContent = styled.p`
  color: #475569;
  font-size: 18px;
  line-height: 1.8;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    line-height: 1.6;
  }
`