import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <div>
            <Navbar className="navBar" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="navTitle" href="#home">Ferretería El Chañar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Herramientas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Herramientas Eléctricas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Seguridad</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Marcas</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

