import React, { useContext } from 'react'
import './ItemDetail.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CounterComponent } from '../CounterComponent/CounterComponent';
import { CartContext } from '../../context/cartContext'
import { toast } from 'react-toastify';


export const ItemDetail = ({ product }) => {
    console.log(product)

    const { addItem } = useContext(CartContext)

    const notify = () => {
        toast(`${product.name} se ha agregado al carrito con éxito!`, {
            position: "top-right",
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



    return (
        <>
            <Container className="fondito mt-5 p-4">
                <Card className="my-5 p-3">
                    <Row>
                        <Col className="detail-img-container">
                            <img className="detail-img" src={product.img} alt="foto" />
                        </Col>
                        <Col>
                            <div>
                                <p className="detail-titulo">{product.name}</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem dignissimos nostrum atque. Vel, dolore, neque tempore doloremque maiores eos, iure laboriosam et quia quod commodi odio sed alias minima.</p>
                                <p className="detail-precio">Precio: $ {product.price}</p>
                                {product.stock > 0 ?
                                    <>
                                        <p> Stock: {product.stock} </p>
                                        <CounterComponent stock={product.stock} onAdd={onAdd} />
                                    </> :
                                    <p>No hay stock</p>
                                }
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}
