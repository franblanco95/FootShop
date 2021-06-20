import { CartComponent } from '../../components/CartComponent';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import React from 'react'



export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">

                <Navbar.Brand href="#">
                    <img className="mx-3" width={40} height={30} src="./imagenes/logo.png" alt="logo" />
                    E-Commerce
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Zapatillas</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Remeras</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Camisas</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2">Ofertas</Nav.Link>
                        <Nav.Link href="#">Ayuda</Nav.Link>
                        <Nav.Link href="#"><CartComponent /></Nav.Link>

                    </Nav>

                    <Form className="d-flex me-3">
                        <FormControl
                            type="search"
                            placeholder="Buscar productos"
                            className="me-3"
                            aria-label="Search"
                        />
                        <Button variant="outline-warning">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
