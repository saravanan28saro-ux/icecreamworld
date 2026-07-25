import {Nav, NavLink} from "./styledComponents"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/flavors">Flavors</NavLink>
      <NavLink to="/history">History</NavLink>
      <NavLink to="/">Home</NavLink>
    <NavLink to="/howtomake">How to Make</NavLink>
    <NavLink to="/reviews">Reviews</NavLink>

    </Nav>
  )
}

export default Header