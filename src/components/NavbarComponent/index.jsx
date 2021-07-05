import { CartComponent } from '../../components/CartComponent';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import React from 'react'



export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">

                <Navbar.Brand>
                    <Link to={'/'}>
                        <img className="mx-3" width={40} height={30} src="./imagenes/logo.png" alt="logo" /></Link>
                    fran-store

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={NavLink} activeClassName="active" to="/">
                            Inicio</Nav.Link>

                        <Nav.Link as={NavLink} activeClassName="active" to="/category/Remeras">
                            Remeras</Nav.Link>

                        <Nav.Link as={NavLink} activeClassName="active" to="/category/Zapatillas">
                            Zapatillas</Nav.Link>

                        <Nav.Link as={NavLink} activeClassName="active" to="/category/Buzos">
                            Buzos</Nav.Link>

                        <Nav.Link>
                            <CartComponent />
                        </Nav.Link>

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
