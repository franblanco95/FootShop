import React, { useContext } from 'react'
import './Cart.css'
import { Container, Row, Button } from 'react-bootstrap'
import { CartContext } from '../../context/cartContext'

export const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CartContext)

    return (
        <div>
            <Container className="fondo" fluid="md">
                <Row className="text-center justify-content-center">
                    <h1> Carrito</h1>
                    
                    {carrito.map((item, index) => (
                        <h1 className="texto-cart" key={index}>{item.item.titulo} - Precio: {item.item.precio} - Cantidad: {item.cantidad}</h1>
                    ))}
                    <Button className="boton" onClick={vaciarCarrito}>Vaciar Carrito</Button>
                </Row>
            </Container>

        </div >
    )
}
