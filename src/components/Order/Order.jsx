import './Order.css'
import React, { useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'
import { CartContext } from '../../context/cartContext'
import { Cargando } from '../Spiner/Spiner'

export const Order = () => {

    const { getOrders, orders } = useContext(CartContext)



    useEffect(() => {
        getOrders();
    }, [])

    return (
        <Container fluid className="order-fondo">
            <Row>
                <Col className="animated fadeIn">

                    {(orders.lenght === 0) ?
                        (<Cargando />)
                        :
                        <>
                            <div className="order-container">
                                {orders.map((order) => {
                                    return (
                                        <ul className="order-card" key={order.id}>
                                            {console.log(order)}
                                            <div className="order-header">
                                                <p className="order-title">ORDER</p>
                                                <Trash />
                                            </div>
                                            <p className="order-id">({order.id})</p>
                                            <hr></hr>
                                            <li><b>Nombre: </b>{order.buyer.name}</li>
                                            <li><b>Email: </b>{order.buyer.email}</li>
                                            <li><b>Teléfono: </b>{order.buyer.phone}</li>
                                            <hr></hr>
                                            {order.item.map((item) => {
                                                return (
                                                    <li className="order-products" key={item.id}>
                                                        <span>Producto: {item.name}</span>
                                                        <span>Precio: $ {item.price}</span>
                                                        <span>Cantidad: x{item.quantity}</span>
                                                    </li>
                                                )
                                            })}


                                        </ul>

                                    )
                                })}
                            </div>
                        </>
                    }

                </Col>
            </Row>
        </Container>
    )
}
