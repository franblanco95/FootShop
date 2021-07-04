import './styles.css'
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import { ItemList } from '../../components/ItemList';

export const ItemListContainer = () => {

    let [productos, setProductos] = useState([]);

    useEffect(() => {
        const waitForData = async () => {
            const response = await fetch("./json/product.json")
            const result = await response.json()
            setProductos(result)
        }
        waitForData();
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