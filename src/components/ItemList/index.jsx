import React from 'react'
import { CardComponent } from "../CardComponent"
import { Col } from 'react-bootstrap'

export function ItemList({ productos }) {
    return (
        <>
            {productos.map(productos => {
                return (
                    <Col>
                        <CardComponent productos={productos} key={productos.id} />
                    </Col >
                )
            })}
        </>
    )
}
