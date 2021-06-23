import './styles.css'
import { CounterComponent } from '../../components/CounterComponent';
import { Card, Button } from 'react-bootstrap';

export const CardComponent = ({ productos }) => {

    function saludar() {
        alert("Se agrego al carrito con exito!");
    }

    return (
        <>
            <Card className="align-items-center mx-auto" style={{ width: '18rem' }}>
                <Card.Img className="imagen" variant="top" src={productos.img}/>
                <Card.Body>
                    <Card.Title>{productos.name}</Card.Title>
                    <Card.Text> {productos.price}
                    </Card.Text>
                    <CounterComponent stock={productos.stock} />
                    <br></br>
                    <Button variant="primary" onClick={saludar}>Agregar al Carrito</Button>
                </Card.Body>
            </Card>
        </>
    )
}


