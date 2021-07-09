import React from 'react'
import './styles.css'
import { CardComponent } from "../../components/CardComponent"
import { Col, Container, Row } from 'react-bootstrap'

export function ItemList({ productosList, categoria }) {
    return (
        <>
            <Container className="fondito p-5">
            <h2>Categoría: {categoria}</h2>
                <Row>
                    {productosList.map((element, index) => {
                        return (
                            <Col key={index}>
                                <CardComponent img={element.img} title={element.title} price={element.price} id={element.id}/>
                            </Col >
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}
