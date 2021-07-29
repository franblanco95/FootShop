import './CardComponent.css'

import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

export const CardComponent = ({ img, title, price, id }) => {

    useEffect(() => {    
        return () => {
            console.log("asd")
        }
    }, [])

    return (
        <>
            <Card className="animated fadeIn card-container align-items-center mx-auto my-3 p-3" style={{ width: '18rem' }}>
                <Card.Body className="card-body p-0">
                    <Card.Img className="card-imagen py-3" width={150} height={250} variant="top" src={img} />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="card-price">Precio: $ {price}</Card.Text>
                    <Button className="card-button" as={Link} to={`/item/${id}`}>Ver Detalle</Button>
                </Card.Body>
            </Card>
        </>
    )
}


