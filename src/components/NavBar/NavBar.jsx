import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/home">Hi, I'm Sandun</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Hi, I'm Sandun</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/xp">Experience</Nav.Link>
            <Nav.Link href="/cv">Curriculum Vitae</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation
