import React from 'react'
import './styles.css'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { CounterComponent } from '../../components/CounterComponent';


export const ItemDetail = ({ img, title, price }) => {

    function saludar() {
        alert("Se agrego al carrito con exito!");
    }

    const prueba = {
        stock:15
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
                            <p className="precio">Precio: $ {price}</p>
                            <CounterComponent stock={prueba} />
                            <Button variant="primary" onClick={saludar}>Agregar al Carrito</Button>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}
