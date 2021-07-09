import { Container, Row } from 'react-bootstrap';
import './HomeContainer.css';

export const HomeContainer = () => {

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

