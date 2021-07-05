import './styles.css'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const CardComponent = ({ img, title, price, id }) => {

    function saludar() {
        alert("Se agrego al carrito con exito!");
    }

    return (
        <>
            <Card className="align-items-center mx-auto my-3" style={{ width: '18rem' }}>
                <Card.Img className="imagen" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <hr></hr>
                    <Card.Text>Precio: $ {price}</Card.Text>
                    <Button variant="primary" className="me-2" onClick={saludar}>Agregar al Carrito</Button>
                    <Button variant="warning" as={Link} to={`/item/${id}`}>Detalle</Button>

                </Card.Body>
            </Card>
        </>
    )
}


