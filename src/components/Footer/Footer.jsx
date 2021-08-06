import './Footer.css'
import React from 'react'

export const Footer = () => {
    return (
        <div className="footer-fondo">
            <img className="footer-logo" src="./imagenes/footshop.png" alt="logo" />
            <hr className="footer-hr"></hr>
            <p className="footer-text">© FootShop ~ Este es un proyecto ficticio del curso de programación de React para Coderhouse. Todos los derechos reservados. Todas las marcas comerciales y marcas registradas son propiedad de sus respectivos dueños.</p>
        </div>
    )
}
