import { Container, Row } from 'react-bootstrap';
import { Auth } from '../../components/Auth/Auth';
import './HomeContainer.css';

export const HomeContainer = () => {

    return (
        <section>
            <Container className="fondo" fluid="md">
                <Row className="text-center py-5">
                    <h1>Bienvenido a FootShop</h1>
                    <Auth/>
                </Row>
            </Container>
        </section >

    )
}

