import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function NavbarCom() {
    return (
        <div className='navbar-top'>
            <Navbar expand="lg" className="bg-body d-lg-block ms-auto" bg="dark" data-bs-theme="dark" fixed='top'>
                <Container>
                    <Link to="/" style={{textDecoration:'none'}}>
                        <Navbar.Brand href="#home">GuitarKu</Navbar.Brand>
                    </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/" style={{textDecoration:'none'}}>
                                    <Nav.Link href="#home">Home</Nav.Link>
                                </Link>
                                <Link to="/collection" style={{textDecoration:'none'}}>
                                    <Nav.Link href="#link">Collection</Nav.Link>
                                </Link>
                                <NavDropdown title="Other" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Amplifier</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Multi-Effect</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Pedal Board</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Cabels</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Case</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarCom;