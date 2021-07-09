import { CartIcon } from '../CartIcon/CartIcon';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './NavbarComponent.css'
import { React, useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export const NavBar = () => {
    const { carrito } = useContext(CartContext)
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">

                <Navbar.Brand
                    as={Link}
                    to="/">
                    <img
                        src="./imagenes/footshop.png"
                        className="mx-5 logo-footshop"
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

                        <Nav.Link as={NavLink}
                            to="/cart">
                            <CartIcon />
                            <span>{carrito.length}</span>
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
