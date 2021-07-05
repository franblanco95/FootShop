import React from 'react'
import './styles.css'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { CounterComponent } from '../../components/CounterComponent';
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const ItemDetail = ({ img, title, price }) => {

    const [cantidad, setCantidad] = useState(0);
    const onAdd = (cant) => {
        setCantidad(cantidad + cant)
    }

    const prueba = {
        stock: 10
    }


    return (
        <>
            <Container className="fondito mt-5 p-4">
                <Card className="my-5 p-3">
                    <Row>
                        <Col>
                            <img className="imagenes" src={img} alt="foto" />
                        </Col>
                        <Col>
                            <p className="titulo">{title}</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem dignissimos nostrum atque. Vel, dolore, neque tempore doloremque maiores eos, iure laboriosam et quia quod commodi odio sed alias minima.</p>
                            <p className="precio">Precio: $ {price}</p>
                            {cantidad > 0 ?
                                <>
                                    <Link to="/cart">
                                        <Button className="d-block" variant="primary">  Terminar compra  </Button>
                                    </Link>
                                    <Button className="d-block mt-2" variant="secondary" onClick={() => setCantidad(0)}>  Reset </Button>
                                </>
                                :
                                <CounterComponent stock={prueba} onAdd={onAdd} />
                            }
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}
