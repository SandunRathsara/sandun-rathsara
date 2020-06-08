import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import "./Style.css"

class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
        <Navbar.Brand href="/home">Hi, I'm Sandun</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav fill="true" variant="pills" className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/xp">Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/cv">Curriculum Vitae</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact Me</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation
