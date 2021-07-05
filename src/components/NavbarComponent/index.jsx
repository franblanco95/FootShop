import { CartComponent } from '../../components/CartComponent';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './styles.css'
import React from 'react'



export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">

                <Navbar.Brand
                    as={Link}
                    to="/">
                    <img
                        src="./imagenes/footshop.png"
                        className="mx-3 logo-footshop"
                        alt="logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav
                        className="mx-auto my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link
                            as={NavLink}
                            exact={true}
                            activeClassName="active"
                            to="/">
                            <h4>Inicio</h4>
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            activeClassName="active"
                            to="/category/Remeras">
                            <h4>Remeras</h4>
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            activeClassName="active"
                            to="/category/Zapatillas">
                            <h4>Zapatillas</h4>
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            activeClassName="active"
                            to="/category/Buzos">
                            <h4>Buzos</h4>
                        </Nav.Link>

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
