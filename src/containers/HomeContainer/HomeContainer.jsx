import './HomeContainer.css';
import { Container, Row } from 'react-bootstrap';
import { Auth } from '../../components/Auth/Auth';
import { Cargando } from '../../components/Spiner/Spiner';
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';



export const HomeContainer = () => {

    const { productos } = useContext(CartContext)

    return (
        <section>

            <Container className="animated fadeIn home-fondo" fluid="md">
                <Row className="text-center py-5 d-flex justify-content-center">

                    {productos ?
                        (<Auth />) :
                        <Cargando />

                    }
                </Row>
            </Container>
        </section >

    )
}

