import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
  return (
    <div className='home-sec'>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#reworkai">
            <a href="#/">
                <img src="src\assets\logo.png" alt="logo"/>
            </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#Talent Finder">Talent Finder</Nav.Link>
            <Nav.Link href="#For Recruiters">For Recruiters</Nav.Link>
            <Nav.Link href="#For Employers">For Employers</Nav.Link>
            <Nav.Link href="#Aobut Us">Aobut Us</Nav.Link>
            <Nav.Link href="#Company">Company</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="light">Log In</Button>
        <Button variant="primary">Get Started</Button>
      </Container>
    </Navbar>
    <div className="jumbotron">
        <h1 className ="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
    </div>
  )
}
