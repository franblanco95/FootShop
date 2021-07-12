import './CardComponent.css'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const CardComponent = ({ img, title, price, id }) => {

    return (
        <>
            <Card className="card-container align-items-center mx-auto my-3 p-3" style={{ width: '18rem' }}>
                <Card.Body className="card-body p-0">
                    <Card.Title>{title}</Card.Title>
                    <Card.Img className="card-imagen py-3" variant="top" src={img} />
                    <Card.Text className="card-price">Precio: $ {price}</Card.Text>
                    <Button className="card-button" as={Link} to={`/item/${id}`}>Ver Detalle</Button>
                </Card.Body>
            </Card>
        </>
    )
}


