import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'
import { useEffect, useState } from 'react'
import { ItemList } from '../../components/ItemList';

export const HomeContainer = () => {

    let [productos, setProductos] = useState([]);

    useEffect(async () => {
        const response = await fetch("./json/product.json")
        const result = await response.json()
        setProductos(result)
    }, [])

    return (
        <section>
            <Container className="fondo" fluid="md">
                <Row className="text-center py-5">
                    <ItemList productos={productos} />
                </Row>
            </Container>
        </section>

    )
}