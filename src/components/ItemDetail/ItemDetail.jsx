import React, { useContext } from 'react'
import './ItemDetail.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CounterComponent } from '../CounterComponent/CounterComponent';
import { CartContext } from '../../context/cartContext'


export const ItemDetail = ({ product }) => {

    const { addItem } = useContext(CartContext)

    const onAdd = qty => addItem({product}, qty)

    const prueba = {
        stock: 10
    }

    return (
        <>
            <Container className="fondito mt-5 p-4">
                <Card className="my-5 p-3">
                    <Row>
                        <Col className="detail-img-container">
                            <img src={product.img} alt="foto" />
                        </Col>
                        <Col>
                            <p className="detail-titulo">{product.title}</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem dignissimos nostrum atque. Vel, dolore, neque tempore doloremque maiores eos, iure laboriosam et quia quod commodi odio sed alias minima.</p>
                            <p className="detail-precio">Precio: $ {product.price}</p>
                            {prueba.stock > 0 ? <p> Stock: {prueba.stock} </p> : <p>No hay stock</p>}

                            <CounterComponent stock={prueba} onAdd={onAdd} />
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}
