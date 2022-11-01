import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
        <Navbar.Brand>
            Task Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='mr-auto'>
               
                    <Nav.Link as={NavLink} to="/login">Iniciar Sesión</Nav.Link>
                    <Nav.Link as={NavLink} to="/register">Registrarse</Nav.Link>
                    <Nav.Link as={NavLink} to="/perfil">Mi Perfil</Nav.Link>
                    <Nav.Link as={NavLink} to="/search">Busqueda</Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        
        <h1>Navigation</h1>
    </Navbar>
  )
}
