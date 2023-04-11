import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <>
 <Navbar className='container-fluid' bg="" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Adventure</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">How It Works</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Whats Next</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}
