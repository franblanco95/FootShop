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

                <Nav className="my-lg-0" navbarScroll>
                    <Nav.Link as={NavLink} exact={true} className="navbar-link" activeClassName="active" to="/">
                        <h4 className="navbar-title mb-0">Inicio</h4>
                    </Nav.Link>

                    <Nav.Link as={NavLink} className="navbar-link" activeClassName="active" to="/category/zapatillas">
                        <h4 className="navbar-title mb-0">Zapatillas</h4>
                    </Nav.Link>

                    <Nav.Link as={NavLink} className="navbar-link" activeClassName="active" to="/category/zapatos">
                        <h4 className="navbar-title mb-0">Zapatos</h4>
                    </Nav.Link>

                    <Nav.Link as={NavLink} className="navbar-link" activeClassName="active" to="/category/ojotas">
                        <h4 className="navbar-title mb-0">Ojotas</h4>
                    </Nav.Link>

                    <Nav.Link as={NavLink} className="navbar-link" activeClassName="active" to="/category/medias">
                        <h4 className="navbar-title mb-0">Medias</h4>
                    </Nav.Link>

                    <Nav.Link as={NavLink} className="navbar-link" activeClassName="active" to="/miscompras">
                        <h4 className="navbar-title mb-0">Mis Compras</h4>
                    </Nav.Link>

                    <Nav.Link as={NavLink} className="navbar-link" to="/cart">
                        <CartIcon /><span>{carrito.length}</span>
                    </Nav.Link>


                </Nav>

            </Navbar.Collapse>
        </Navbar >


    )
}
