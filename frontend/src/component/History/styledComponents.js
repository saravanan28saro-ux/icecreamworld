import styled from "styled-components"

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 40px;

  @media screen and (max-width: 768px) {
    padding: 25px;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`

export const Heading = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
  font-size: 42px;

  @media screen and (max-width: 768px) {
    font-size: 34px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`

export const HistoryList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 1000px;
  margin: auto;
`

export const HistoryCard = styled.li`
  background-color: #ffffff;
  padding: 25px;
  margin-bottom: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
    margin-bottom: 15px;
  }
`

export const Title = styled.h2`
  color: #8b4513;
  margin-bottom: 15px;
  font-size: 30px;

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`

export const Content = styled.p`
  color: #555;
  line-height: 1.8;
  font-size: 17px;
  text-align: justify;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 1.7;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    line-height: 1.6;
  }
`