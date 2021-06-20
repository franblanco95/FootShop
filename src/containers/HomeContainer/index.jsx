import { CardComponent } from '../../components/CardComponent';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'

export const HomeContainer = (props) => {
    return (

        <section>
            <Container className="fondo" fluid="md">
                <Row className="text-center py-5">
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