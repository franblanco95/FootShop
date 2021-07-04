import './styles.css'
import { CounterComponent } from '../../components/CounterComponent';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const CardComponent = ({ img, title, price, id }) => {

    function saludar() {
        alert("Se agrego al carrito con exito!");
    }

    return (
        <>
            <Card className="align-items-center mx-auto" style={{ width: '18rem' }}>
                <Card.Img className="imagen" variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {price}
                    </Card.Text>
                    {/* <CounterComponent stock={} /> */}
                    <br></br>
                    <Button variant="primary" onClick={saludar}>Agregar al Carrito</Button>
                    <Button variant="warning" as={Link} to={`/item/${id}`}>Detalle</Button>

                </Card.Body>
            </Card>
        </>
    )
}


