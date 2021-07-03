import React from 'react'
import { Col, Button } from 'react-bootstrap';
import { CounterComponent } from '../../components/CounterComponent';


export const ItemDetail = ({ productos }) => {

    function saludar() {
        alert("Se agrego al carrito con exito!");
    }

    return (
        <>
            <Col>
                <img src={productos.thumbnail} alt="foto" />
            </Col>
            <Col>
                <p>{productos.title}</p>
                <p>Precio: $ {productos.price}</p>
                <CounterComponent />
                <Button variant="primary" onClick={saludar}>Agregar al Carrito</Button>
            </Col>
        </>
    )
}
