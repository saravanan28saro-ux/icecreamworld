import styled from "styled-components"
import {Link} from "react-router-dom"

export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  background-color: #e262ab;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 768px) {
    gap: 20px;
    height: 60px;
  }

  @media screen and (max-width: 480px) {
    gap: 12px;
    height: auto;
    padding: 15px;
    flex-wrap: wrap;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`