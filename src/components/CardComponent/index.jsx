import './styles.css'
import { CounterComponent } from '../../components/CounterComponent';
import { Card, Button } from 'react-bootstrap';

export const CardComponent = ({ name, price, img, stock }) => {

    function saludar() {
        alert("Se agrego al carrito con exito!");
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img className="imagen" variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> {price}
                    </Card.Text>
                    <Button variant="primary" onClick={saludar}>Agregar al Carrito</Button>
                    <CounterComponent stock={stock} />
                </Card.Body>
            </Card>
        </>
    )
}


