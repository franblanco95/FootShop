import React from 'react'
import './Spiner.css'
import { Container, Row } from 'react-bootstrap'

export const Cargando = () => {
    return (
        <>
            <Container className="fondo" fluid="md">
                <Row className="text-center py-5 align-items-center">
                    <div class="spinner">
                        <div class="cube1"></div>
                        <div class="cube2"></div>
                    </div>
                    <h3>Cargando</h3>
                </Row>
            </Container>
        </>
    )
}
