import styled from "styled-components"

export const MainContainer = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  background: linear-gradient(to right, #ffe5ec, #ffffff);

  @media screen and (max-width:768px){
    flex-direction: column;
    text-align:center;
  }
`

export const ContentContainer = styled.div`
  width:50%;

  @media screen and (max-width:768px){
    width:100%;
  }
`

export const Heading = styled.h1`
  font-size:50px;
  color:#d63384;

  @media screen and (max-width:768px){
    font-size:38px;
  }
`

export const Description = styled.p`
  font-size:20px;
  color:#444;
  line-height:1.8;
`

export const Button = styled.button`
  padding:15px 30px;
  border:none;
  border-radius:10px;
  background:#ff69b4;
  color:white;
  font-size:18px;
  cursor:pointer;

  &:hover{
    background:#d63384;
  }
`

export const Image = styled.img`
  width:450px;
  border-radius:20px;

  @media screen and (max-width:768px){
    width:300px;
    margin-top:30px;
  }
`