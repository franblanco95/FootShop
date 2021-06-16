import { CardComponent } from '../../components/CardComponent';
import { Container, Row, Col } from 'react-bootstrap';

export const HomeContainer = (props) => {
    return (

        <section>
            <Container fluid="md">
                <Row>
                    {props.productData.map((product) => {
                        return (
                            <Col>
                                <CardComponent
                                    name={product.name}
                                    img={product.img}
                                    price={product.price}
                                    stock={product.stock} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>

    )
}