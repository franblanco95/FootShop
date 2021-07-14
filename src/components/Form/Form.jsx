import React from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'

export const FormComponent = () => {
    return (
        <Container>
            <Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTelefono">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="number" placeholder="Numero de telefono" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Row>
        </Container>

    )
}
