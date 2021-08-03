import React, { useContext } from 'react'
import './Cart.css'
import { Container, Row, Button, Col } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons';
import { CartContext } from '../../context/cartContext'
import { NavLink } from 'react-router-dom'

export const Cart = () => {
    const { carrito, vaciarCarrito, removeItem, totalPrice } = useContext(CartContext)

    return (
        <div>
            <Container className="cart-fondo" fluid>
                <Row>
                    <Col className="animated fadeIn text-center d-flex justify-content-center">
                        {carrito.length === 0 ?
                            <>
                                <div>
                                    <img src="./imagenes/emptycart.png" alt="emptycart" />
                                    <h2 className="cart-subtitle">El carrito se encuentra vacío</h2>
                                </div>
                            </> :

                            <>
                                <div className="cart-body">
                                    <div className="cart-header">
                                        <span className="cart-maintitle">Carrito</span>
                                        <span className="cart-clear" onClick={vaciarCarrito}>vaciar carrito</span>
                                    </div>
                                    <ul>
                                        {carrito.map((item, index) => {
                                            return (
                                                <li key={index} className="cart-list">
                                                    <img width={135} height={110} className="cart-img" src={item.img} alt={item.name} />
                                                    <div className="cart-data">
                                                        <h3 className="cart-title">{item.name}</h3>
                                                        <div className="cart-actions">
                                                            <span className="cart-item">Cantidad: {item.quantity}</span>
                                                            <span className="cart-item">Precio: $ {item.price}</span>
                                                            <Trash className="cart-icon me-3" onClick={() => removeItem(index)} />
                                                        </div>
                                                    </div>

                                                </li>)


                                        })}
                                    </ul>

                                    <div className="cart-total"><span>Total: $ {totalPrice}</span> </div>
                                    <Button as={NavLink} to="/checkout" className="cart-button">Terminar Compra</Button>
                                </div>
                            </>

                        }

                    </Col>

                </Row>
            </Container>

        </div >
    )
}
