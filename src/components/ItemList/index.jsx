import React from 'react'
import { CardComponent } from "../CardComponent"
import { Col } from 'react-bootstrap'

export function ItemList({ productos }) {
    return (
        <>
            {productos.map(producto => {
                return (
                    <Col>
                        <CardComponent productos={producto} key={producto.id} />
                    </Col >
                )
            })}
        </>
    )
}
