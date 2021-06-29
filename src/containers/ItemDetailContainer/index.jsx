import './styles.css'
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import { ItemDetail } from '../../components/ItemDetail';

export const ItemDetailContainer = () => {

    let [producto, setProducto] = useState([]);

    useEffect(() => {
        const waitForData = async () => {
            const response = await fetch("https://api.mercadolibre.com/items/MLA856904496")
            const result = await response.json()
            console.log(result)
            setTimeout(() => {
                setProducto(result)
            }, 4000);

        }
        waitForData();
    }, [])

    return (
        <section>
            <Container className="fondo" fluid="md">
                <Row className="text-center py-5">
                    <ItemDetail productos={producto} />
                </Row>
            </Container>
        </section>

    )
}