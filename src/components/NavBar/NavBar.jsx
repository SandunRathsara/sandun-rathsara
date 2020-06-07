import React from "react"
import NavBar
from "react-bootstrap/Navbar"
function NavBar() {
  return (
    <NavBar bg="dark" expand="lg">
      <NavBar.Brand href="#home">Hi, I'm Sandun</NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.link href="#home">Home</Nav.link>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
    // <React.Fragment>
    //   <ul>
    //     <li>Hi</li>
    //     <li>Projects</li>
    //     <li>Experience</li>
    //     <li>Curriculam vitae</li>
    //     <li>Contact me</li>
    //   </ul>
    // </React.Fragment>
  )
}

export default NavBar
