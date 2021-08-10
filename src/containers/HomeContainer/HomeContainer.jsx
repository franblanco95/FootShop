import './HomeContainer.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Cargando } from '../../components/Spiner/Spiner'
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { CardComponent } from '../../components/CardComponent/CardComponent';

export const HomeContainer = () => {

    const { productos } = useContext(CartContext)

    return (
        <Container fluid className="home-fondo">

            {productos.length === 0 ?
                (<Cargando />) :
                <>
                    {/* <div className="py-5 allcategories">

                        <Link className="home-category" to="/category/zapatillas">Zapatillas</Link>

                        <Link className="home-category" to="/category/zapatos">Zapatos</Link>

                        <Link className="home-category" to="/category/ojotas">Ojotas</Link>

                        <Link className="home-category" to="/category/medias">Medias</Link>
                    </div> */}
                    <div className="allproducts">

                        {productos.map((element) => {
                            return (
                                <div key={element.id}>
                                    <CardComponent className="eachproduct" img={element.img} title={element.name} price={element.price} id={element.id} />
                                </div >
                            )
                        })}
                    </div>
                </>
            }

        </Container >


    )
}

