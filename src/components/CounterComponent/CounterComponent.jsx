import './CounterComponent.css'
import React, { useState } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CounterComponent = ({ stock, onAdd }) => {

    const [counter, setCounter] = useState(1)

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const manualChange = (e) => {
        let value = e.target.value
        if (value > stock) {
            setCounter(stock)
        } else {
            setCounter(value)
        }
    }

    const reset = () => {
        setCounter(1)
    }

    return (
        <>
            <div className="counter-container">
                <InputGroup className="mb-3">
                    <Button onClick={restar}>-</Button>
                    <FormControl type="number" value={counter} onChange={manualChange} />
                    <Button onClick={sumar}>+</Button>
                </InputGroup>
            </div>
            <Button onClick={() => { onAdd(counter); reset() }} className="counter-button">Agregar al Carrito</Button>
            <div className="toast-container">
                <ToastContainer />
            </div>

            <Link to="/cart">
                <Button className="counter-button-cart ms-2">Ir al Carrito</Button>
            </Link>

        </>
    )
}
