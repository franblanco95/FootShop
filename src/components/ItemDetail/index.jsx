import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CounterComponent } from '../../components/CounterComponent';


export const ItemDetail = ({ img, title, price }) => {

    function saludar() {
        alert("Se agrego al carrito con exito!");
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <img src={img} alt="foto" />
                    </Col>
                    <Col>
                        <p>{title}</p>
                        <p>Precio: $ {price}</p>
                        <CounterComponent />
                        <Button variant="primary" onClick={saludar}>Agregar al Carrito</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
