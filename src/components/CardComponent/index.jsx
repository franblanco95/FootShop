import './styles.css'

export const CardComponent = ({sneaker}) => {
    function saludar() {
        alert("Se agrego al carrito con exito!");
    }
    return (
        <div className="card">
            <h2>{sneaker.name}</h2>
            <strong>{sneaker.price}</strong>
            <button className="btn btn-primary" onClick={saludar}>Agregar al carrito</button>
        </div>
    )
}


