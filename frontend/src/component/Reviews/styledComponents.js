import styled from "styled-components"

export const MainContainer = styled.div`
  min-height:100vh;
  padding:40px;
  background:#f8f9fa;
`

export const Heading = styled.h1`
  text-align:center;
  color:#d63384;
  margin-bottom:40px;
`

export const ReviewContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:25px;
`

export const ReviewCard = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
  width:100vh;
  height:5vh;
  background:white;
  padding:25px;
  border-radius:15px;
  box-shadow:0 5px 15px rgba(0,0,0,.15);
  transition:.3s;

  &:hover{
    transform:translateY(-8px);
  }

  @media screen and (max-width:768px){
    width:90%;
  }
`

export const User = styled.h2`
  color:#ff69b4;
`

export const Review = styled.p`
  color:#555;
  line-height:1.7;
`