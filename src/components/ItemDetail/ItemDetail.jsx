import React, { useContext } from 'react'
import './ItemDetail.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CounterComponent } from '../CounterComponent/CounterComponent';
import { CartContext } from '../../context/cartContext'
import { toast } from 'react-toastify';


export const ItemDetail = ({ product }) => {
    console.log(product)

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
    const stockInCart = getItemQty({product});
    const availableStock = product.stock - stockInCart;



    return (
        <>
            <Container fluid className="detail-fondito p-4">
                <Card className="animated fadeIn detail-row my-5 p-3">
                    <Row>
                        <Col className="detail-img-container">
                            <img className="detail-img" width={400} height={400} src={product.img} alt="foto" />
                        </Col>
                        <Col>
                            <div>
                                <p className="detail-titulo">{product.name}</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem dignissimos nostrum atque. Vel, dolore, neque tempore doloremque maiores eos, iure laboriosam et quia quod commodi odio sed alias minima.</p>
                                <p className="detail-precio">Precio: $ {product.price}</p>
                                {availableStock > 0 ?
                                    <>
                                        {/* <p> Stock: {product.stock} </p> */}
                                        <p> Stock: {availableStock} </p>
                                        <CounterComponent stock={availableStock} onAdd={onAdd} />
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
