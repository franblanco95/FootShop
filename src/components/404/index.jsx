import React from 'react'
import './styles.css'
import { Container, Row } from 'react-bootstrap'

export const Error404 = () => {
    return (
        <div>
            <Container className="fondo" fluid="md">
                <Row>
                    <img className="imagen m-auto" src="./imagenes/404.png" alt="Error 404" />
                </Row>
            </Container>

        </div>
    )
}
