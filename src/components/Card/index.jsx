import './styles.css'

export const CardComponent = () => {
    function saludar() {
        alert("hola");
    }
    return (
        <div className="card">
            <h1>Titulo de Card</h1>
            <strong>$999,99</strong>
            <button onClick={saludar}>Agregar al carrito</button>
        </div>
    )
}