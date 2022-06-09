import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">  SUJON </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home"> Home </Nav.Link>
      <Nav.Link href="blogs"> Blogs </Nav.Link>
      <Nav.Link href="login"> Login </Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="contact"> Contact </Nav.Link>
      <Nav.Link  href="About">
       About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;