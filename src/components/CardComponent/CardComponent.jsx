import './CardComponent.css'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const CardComponent = ({ img, title, price, id }) => {

    return (
        <>
            <Card className="align-items-center mx-auto my-3 p-3" style={{ width: '18rem' }}>
                <Card.Img className="imagen" variant="top" src={img} />
                <Card.Body className="p-0 pt-3">
                    <Card.Title>{title}</Card.Title>
                    <hr></hr>
                    <Card.Text>Precio: $ {price}</Card.Text>
                    <Button variant="warning" as={Link} to={`/item/${id}`}>Ver Detalle</Button>

                </Card.Body>
            </Card>
        </>
    )
}


