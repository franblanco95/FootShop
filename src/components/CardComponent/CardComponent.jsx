import './CardComponent.css'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const CardComponent = ({ img, title, price, id }) => {

    return (
        <>
            <Card className="card-container align-items-center mx-auto my-3 p-3" style={{ width: '18rem' }}>
                <Card.Img className="card-imagen" variant="top" src={img} />
                <Card.Body className="card-body p-0 pt-3">
                    <Card.Title>{title}</Card.Title>
                    <hr></hr>
                    <Card.Text className="card-price">Precio: $ {price}</Card.Text>
                    <Button className="card-button" as={Link} to={`/item/${id}`}>Ver Detalle</Button>
                </Card.Body>
            </Card>
        </>
    )
}


