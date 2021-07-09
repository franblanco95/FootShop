import React from 'react'
import { Spinner, Container, Row } from 'react-bootstrap'

export const Cargando = () => {
    return (
        <>
            <Container className="fondo" fluid="md">
                <Row className="text-center py-5 align-items-center">
                    <h3>Cargando</h3>
                    <Spinner className="m-auto" animation="border" role="status"></Spinner>
                </Row>
            </Container>
        </>
    )
}
