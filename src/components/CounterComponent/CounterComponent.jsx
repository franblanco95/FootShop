import './CounterComponent.css'
import React, { useState } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

    return (
        <>
            <div className="counter-container">
                <InputGroup className="mb-3">
                    <Button onClick={restar}>-</Button>
                    <FormControl type="number" value={counter} onChange={manualChange} />
                    <Button onClick={sumar}>+</Button>
                </InputGroup>
            </div>
            <Button onClick={() => onAdd(counter)} variant="primary">Agregar al Carrito</Button>
            <Link to="/cart">
                <Button className="ms-2">Ir al Carrito</Button>
            </Link>
        </>
    )
}
