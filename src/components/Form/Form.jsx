import './Form.css'
import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Form, Button, Col } from 'react-bootstrap'
import { CartContext } from '../../context/cartContext'

export const FormComponent = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const history = useHistory()

    const { createOrder } = useContext(CartContext)

    return (
        <Container className="form-fondo" fluid>
            <Row>
                <Col className="animated fadeIn form-container">

                    <p className="form-header">Dirección de envío</p>
                    <Form onSubmit={(e) => {
                        createOrder(e, name, email, phone);
                        history.push("/orders")
                    }}>
                        {/* hook que me redirige a orders dentro del onSubmit, pq link lo pisaba */}

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control required className="form-input" type="text" onInput={(e) => { setName(e.target.value) }} placeholder="Nombre" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control required className="form-input" type="email" onInput={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTelefono">
                            <Form.Control required className="form-input" type="tel" onInput={(e) => { setPhone(e.target.value) }} placeholder="Numero de teléfono" />
                        </Form.Group>


                        <Button type="submit" className="form-button" variant="primary">Enviar</Button>


                    </Form>
                </Col>
            </Row>
        </Container >

    )
}
