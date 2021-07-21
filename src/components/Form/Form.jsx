import React, { useState, useContext } from 'react'
import { Container, Row, Form, Button, Col } from 'react-bootstrap'
import { CartContext } from '../../context/cartContext'

export const FormComponent = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    const { createOrder } = useContext(CartContext)

    return (
        <Container className="fondo" fluid="md">
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" onInput={(e) => { setName(e.target.value) }} placeholder="Nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onInput={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTelefono">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="tel" onInput={(e) => { setPhone(e.target.value) }} placeholder="Numero de telefono" />
                        </Form.Group>

                        <Button variant="primary" onClick={() => createOrder(name, email, phone)}>
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container >

    )
}
