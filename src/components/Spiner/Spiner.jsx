import React from 'react'
import './Spiner.css'
import { Container, Row } from 'react-bootstrap'

export const Cargando = () => {
    return (
        <>
            <Container className="spiner-fondo" fluid>
                <Row className="text-center py-5 align-items-center">
                    <div className="spinner">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div>
                    <h3 className="spiner-text">Cargando</h3>
                </Row>
            </Container>
        </>
    )
}
