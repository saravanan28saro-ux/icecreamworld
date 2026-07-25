import styled from "styled-components"

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f8f8;
  padding: 30px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`

export const Heading = styled.h1`
  text-align: center;
  color: #333;
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

export const FlavorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 25px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 20px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

export const FlavorCard = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  }

  @media screen and (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    max-width: 320px;
  }
`

export const FlavorButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const FlavorImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ffb6c1;
  padding: 6px;
  background-color: white;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.08);
    border-color: #ff69b4;
  }

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 480px) {
    width: 130px;
    height: 130px;
  }
`

export const FlavorName = styled.h2`
  color: #222;
  margin-top: 15px;
  font-size: 22px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const Popup = styled.div`
  width: 550px;
  max-width: 95%;
  max-height: 85vh;
  overflow-y: auto;
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  position: relative;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 450px;
    padding: 25px;
  }

  @media screen and (max-width: 480px) {
    width: 95%;
    padding: 20px;
  }
`

export const PopupImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
  }

  @media screen and (max-width: 480px) {
    width: 180px;
    height: 180px;
  }
`

export const PopupTitle = styled.h2`
  margin-top: 20px;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`

export const PopupContent = styled.p`
  color: #555;
  line-height: 1.7;
  font-size: 18px;
  text-align: justify;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    line-height: 1.6;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background: crimson;
  color: white;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background: #b00020;
  }

  @media screen and (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`