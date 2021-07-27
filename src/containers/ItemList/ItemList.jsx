import React from 'react'
import './ItemList.css'
import { CardComponent } from "../../components/CardComponent/CardComponent"
import { Col, Container, Row } from 'react-bootstrap'

export function ItemList({ productos, category }) {
    console.log(productos)
    return (
        <>
            <Container fluid className="list-fondo p-5">
                <Row>
                    <h2 className="list-category">Categoría: {category}</h2>
                    <Col className="list-row">
                        {productos.map((element, index) => {
                            return (
                                <div key={index}>
                                    <CardComponent img={element.img} title={element.name} price={element.price} id={element.id} />
                                </div >
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
