import './styles.css'
import { CounterComponent } from '../../components/CounterComponent';

export const CardComponent = ({name, price, stock}) => {
    function saludar() {
        alert("Se agrego al carrito con exito!");
    }

    return (
        <div className="card">
            <h2>{name}</h2>
            <img src="{img}" alt="imagen" />
            <strong>{price}</strong>
            <CounterComponent stock={stock} />
            <button className="btn btn-primary" onClick={saludar}>Agregar al carrito</button>
        </div>
    )
}


