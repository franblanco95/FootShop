import { Container, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext'
import './styles.css'

export const HomeContainer = () => {
    const estadoGlobal = useContext(CartContext)
    console.log(estadoGlobal)

    return (
        <section>
            <Container className="fondo" fluid="md">
                <Row className="text-center py-5">
                    <h1>Bienvenido al E-Commerce de Fran</h1>
                </Row>
            </Container>
        </section >

    )
}