import './HomeContainer.css';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Cargando } from '../../components/Spiner/Spiner'
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { CardComponent } from '../../components/CardComponent/CardComponent';

// for (let i = 0; i < productos.length; i++) {

//     if (productos[i].categoryId == '') {
//         (<p>Hola</p>);
//     } else {
//         console.log("hola")
//     }
// }

export const HomeContainer = () => {

    const { productos } = useContext(CartContext)

    return (
        <Container fluid className="home-fondo">
            <div className="py-5 allcategories">

                {/* {productos.map(producto => {
                    if (producto.categoryId == '') {
                        console.log("aca");
                    } else {
                        (<p>asd</p>)
                    }
                })} */}

                {/* {if (productos[0].categoryId == '') {
                             (<p>Hola</p>);
                         } else {
                             (<Cargando/>)
                        }
                 } */}

                {/* {for (let i = 0; i < productos.length; i++)} */}
                <Link className="home-category" to="/category/zapatillas">Zapatillas</Link>

                <Link className="home-category" to="/category/zapatos">Zapatos</Link>

                <Link className="home-category" to="/category/ojotas">Ojotas</Link>

                <Link className="home-category" to="/category/medias">Medias</Link>
            </div>
            <div className="allproducts">
                {productos.length == 0 ? 
                productos.map((element) => {
                    return (
                        <div key={element.id}>
                            <CardComponent className="eachproduct" img={element.img} title={element.name} price={element.price} id={element.id} />
                        </div >
                    )
                }) :
                (<Cargando/>)
            }
            </div>
        </Container >


    )
}

