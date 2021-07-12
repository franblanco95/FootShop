import React, { useContext } from 'react'
import './Cart.css'
import { Container, Row, Button, Col } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons';
import { CartContext } from '../../context/cartContext'

export const Cart = () => {
    const { carrito, vaciarCarrito, removeItem, totalPrice } = useContext(CartContext)

    return (
        <div>
            <Container className="fondo" fluid="md">
                <Row className="text-center justify-content-center">
                    <Col>
                        <ul className="cart-body">
                            <h1> Carrito</h1>
                            {carrito.map((item, index) => {
                                return (

                                    <li key={index} className="cart-list">
                                        <img className="cart-img" src={item.img} />
                                        <div className="cart-data">
                                            <h3 className="cart-title">{item.title}</h3>
                                            <div className="cart-actions">
                                                <span className="cart-item">Precio: $ {item.price}</span>
                                                <span className="cart-item mx-4">Cantidad: {item.quantity}</span>
                                                <Trash className="cart-icon" onClick={() => removeItem(index)} />
                                            </div>
                                        </div>

                                    </li>
                                );
                            })}
                            <div><span>Precio Total: ${totalPrice}</span> </div>
                            <Button className="boton" onClick={vaciarCarrito}>Vaciar Carrito</Button>
                        </ul>
                    </Col>

                </Row>
            </Container>

        </div >
    )
}
