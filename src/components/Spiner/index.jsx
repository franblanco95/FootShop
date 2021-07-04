import React from 'react'
import { Spinner, Container } from 'react-bootstrap'

export const Cargando = () => {
    return (
        <>
            <Container>
                <Spinner animation="border" role="status"></Spinner>
            </Container>
        </>
    )
}
