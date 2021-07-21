import React from 'react'
import './ItemList.css'
import { CardComponent } from "../../components/CardComponent/CardComponent"
import { Col, Container, Row } from 'react-bootstrap'

export function ItemList({ productos }) {
    console.log(productos)
    return (
        <>
            <Container className="fondito p-5">
                <h2>Categoría: </h2>
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
