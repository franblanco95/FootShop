import './NavbarComponent.css'
import { React, useContext } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { CartIcon } from '../CartIcon/CartIcon';
import { CartContext } from '../../context/cartContext'

export const NavBar = () => {
    const { carrito } = useContext(CartContext)
    return (

        <Navbar className="navbar-container" expand="lg">

            <Navbar.Brand as={Link} to="/">
                <img src="./imagenes/footshop.png" className="mx-5 navbar-logo" alt="logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className="justify-content-end" id="navbarScroll">

                <Nav navbarScroll>

                    <Nav.Link as={NavLink} className="navbar-title" exact to="/">Inicio</Nav.Link>

                    <NavDropdown alignLeft title="Categorias" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/category/zapatillas">Zapatillas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/zapatos">Zapatos</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/ojotas">Ojotas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/medias">Medias</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link as={NavLink} className="navbar-title" to="/miscompras">Mis Compras</Nav.Link>

                    <Nav.Link as={NavLink} className="navbar-title" to="/login">Iniciar Sesion</Nav.Link>

                    <NavLink as={NavLink} className="navbar-title me-5" to="/cart"><CartIcon activeClassName="active" />{carrito.length === 0 ? '' : (carrito.length)}</NavLink>

                </Nav>

            </Navbar.Collapse>
        </Navbar >

    )
}
