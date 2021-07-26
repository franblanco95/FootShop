import React from 'react'
import './ItemList.css'
import { CardComponent } from "../../components/CardComponent/CardComponent"
import { Col, Container, Row } from 'react-bootstrap'

export function ItemList({ productos,category }) {
    console.log(productos)
    return (
        <>
            <Container className="list-fondo p-5">
                <h2>Categoría: {category}</h2>
                <Row>
                    {productos.map((element, index) => {
                        return (
                            <Col key={index}>
                                <CardComponent img={element.img} title={element.name} price={element.price} id={element.id} />
                            </Col >
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}
