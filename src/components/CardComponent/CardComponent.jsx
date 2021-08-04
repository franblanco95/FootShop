import './CardComponent.css'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const CardComponent = ({ img, title, price, id }) => {

    return (
        <>
            <Card className="animated fadeIn card-container align-items-center mx-auto my-3 p-3" style={{ width: '18rem' }}>
                <Card.Body className="card-body p-0">
                    <Link to={`/item/${id}`}>
                        <Card.Img className="card-imagen" width={150} height={250} variant="top" src={img} />
                    </Link>
                    <Card.Title className="card-title mt-3">{title}</Card.Title>
                    <Card.Text className="card-price">Precio: $ {price}</Card.Text>
                    <Button className="card-button mb-3" as={Link} to={`/item/${id}`}>Ver Detalle</Button>
                </Card.Body>
            </Card>
        </>
    )
}


