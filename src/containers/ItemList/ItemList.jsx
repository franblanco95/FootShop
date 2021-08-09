import React from 'react'
import './ItemList.css'
import { CardComponent } from "../../components/CardComponent/CardComponent"
import { Col, Container, Row } from 'react-bootstrap'

export function ItemList({ productos, category }) {

    function mayusc({ category }) {
        return category.charAt(0).toUpperCase() + category.slice(1)
    }

    return (
        <>
            <Container fluid className="list-fondo p-5">
                <Row>
                    <h2 className="list-category">{mayusc({ category })}</h2>
                    <Col className="list-row">
                        {productos.map((element) => {
                            return (
                                <div key={element.id}>
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
