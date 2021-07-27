import './NavbarComponent.css'
import { React, useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
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
            <Navbar.Collapse className="justify-content-evenly" id="navbarScroll">

                <Nav className="d-flex justify-content-evenly my-lg-0" navbarScroll>

                    <Nav.Link as={NavLink} className="navbar-title" exact={true} activeClassName="active" to="/">Inicio</Nav.Link>

                    <Nav.Link as={NavLink} className="navbar-title" activeClassName="active" to="/category/zapatillas">Zapatillas</Nav.Link>

                    <Nav.Link as={NavLink} className="navbar-title" activeClassName="active" to="/category/zapatos">Zapatos</Nav.Link>

                    <Nav.Link as={NavLink} className="navbar-title" activeClassName="active" to="/category/ojotas">Ojotas</Nav.Link>

                    <Nav.Link as={NavLink} className="navbar-title" activeClassName="active" to="/category/medias">Medias</Nav.Link>

                    <Nav.Link as={NavLink} className="navbar-title" activeClassName="active" to="/miscompras">Mis Compras</Nav.Link>

                    <NavLink as={NavLink} className="navbar-title" activeClassName="active" to="/cart"><CartIcon activeClassName="active"/>{carrito.length}</NavLink>

                </Nav>

            </Navbar.Collapse>
        </Navbar >


    )
}
