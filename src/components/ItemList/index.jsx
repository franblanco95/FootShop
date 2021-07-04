import React from 'react'
import { CardComponent } from "../CardComponent"
import { Col, Container, Row } from 'react-bootstrap'

export function ItemList({ productosList, categoria }) {
    return (
        <>
            <Container>
            <h1>Estas en la parte de {categoria}</h1>
                <Row>
                    {productosList.map((element, index) => {
                        return (
                            <Col key={index}>
                                <CardComponent img={element.img} title={element.title} price={element.price} />
                            </Col >
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}
