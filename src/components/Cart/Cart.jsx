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
                        <ul className="cart-body">
                            <h1 className="cart-maintitle">Carrito</h1>

                            {carrito.length == 0 ?
                                <>
                                    <img src="./imagenes/emptycart.png" />
                                    <h1>El carrito se encuentra vacío</h1>
                                </> :

                                <>

                                    {carrito.map((item, index) => {
                                        return <>
                                            <li key={index} className="cart-list">
                                                <img width={125} height={125} className="cart-img" src={item.img} />
                                                <div className="cart-data">
                                                    <h3 className="cart-title">{item.name}</h3>
                                                    <div className="cart-actions">
                                                        <span className="cart-item">Precio: $ {item.price}</span>
                                                        <span className="cart-item mx-4">Cantidad: {item.quantity}</span>
                                                        <Trash className="cart-icon" onClick={() => removeItem(index)} />
                                                    </div>
                                                </div>

                                            </li>

                                        </>
                                    })}

                                    <div div className="cart-total"><span>Total: $ {totalPrice}</span> </div>
                                    <Button className="cart-button me-4" onClick={vaciarCarrito}>Vaciar Carrito</Button>
                                    <Button as={NavLink} to="/formulario" className="cart-button">Terminar Compra</Button>
                                </>
                            }

                        </ul>

                    </Col>

                </Row>
            </Container>

        </div >
    )
}
