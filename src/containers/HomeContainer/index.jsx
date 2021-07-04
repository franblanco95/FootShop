import { Container, Row } from 'react-bootstrap';
import { Cargando } from '../../components/Spiner'

export const HomeContainer = () => {

    return (
        <section>
            <Container className="fondo" fluid="md">
                <Row className="text-center py-5">
                    <h1>Hola Este es el E-Commerce de Fran</h1>
                    <Cargando></Cargando>

                </Row>
            </Container>
        </section >

    )
}