import React from 'react'
import './Error404.css'
import { Container, Row } from 'react-bootstrap'

export const Error404 = () => {
    return (
        <div>
            <Container fluid className="fondo-error">
                <Row>
                    <img className="animated fadeIn imagen m-auto" src="./imagenes/404.png" alt="Error 404" />
                </Row>
            </Container>

        </div>
    )
}
