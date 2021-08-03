import React, { useContext } from 'react'
import './ItemDetail.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CounterComponent } from '../CounterComponent/CounterComponent';
import { CartContext } from '../../context/cartContext'
import { Cargando } from '../Spiner/Spiner'
import { toast } from 'react-toastify';
import StarRatings from 'react-star-ratings';


export const ItemDetail = ({ product }) => {

    const { addItem, getItemQty } = useContext(CartContext)

    const notify = () => {
        toast.info(`${product.name} se ha agregado al carrito con éxito!`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        });
    }

    const onAdd = qty => {
        addItem({ product }, qty)
        notify()

    }
    const stockInCart = getItemQty({ product });

    const availableStock = product.stock - stockInCart;


    return (
        <>
            <Container fluid className="detail-fondito p-4">
                <Card className="animated fadeIn detail-row my-5 p-3">
                    <Row>
                        {!product ?
                            (<Cargando />) :
                            <>
                                <Col className="detail-img-container">
                                    <img className="detail-img" width={400} height={400} src={product.img} alt="foto" />
                                </Col>
                                <Col>

                                    <p className="detail-titulo">{product.name}</p>
                                    <p className="detail-precio">Precio</p>
                                    <div className="detail-header">
                                        <span className="detail-span">$ {product.price}</span>
                                        <StarRatings
                                            rating={product.star}
                                            numberOfStars={5}
                                            starRatedColor="rgb(218,165,32)"
                                            starDimension="25px"
                                            starSpacing="5px"

                                        />

                                    </div>
                                    <hr></hr>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem dignissimos nostrum atque. Vel, dolore, neque tempore doloremque maiores eos, iure laboriosam et quia quod commodi odio sed alias minima.</p>
                                    {availableStock > 0 ?
                                        <>
                                            <p>Stock: {availableStock} </p>
                                            <CounterComponent stock={availableStock} onAdd={onAdd} />
                                        </> :
                                        <p>No hay stock</p>
                                    }

                                </Col>
                            </>}
                    </Row>
                </Card>
            </Container>
        </>
    )
}
