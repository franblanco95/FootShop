import './styles.css'
import { CounterComponent } from '../../components/CounterComponent';
import { Card, Button } from 'react-bootstrap';

export const CardComponent = ({ img, title, price }) => {

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
                </Card.Body>
            </Card>
        </>
    )
}


