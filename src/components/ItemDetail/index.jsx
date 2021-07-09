import React from 'react'
import './styles.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CounterComponent } from '../../components/CounterComponent';


export const ItemDetail = ({ img, title, price, id }) => {

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
                            {prueba.stock > 0 ? <p> Stock: {prueba.stock} </p> : <p>No hay stock</p>}
                            
                            <CounterComponent stock={prueba} title={title} price={price} id={id}/>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}
