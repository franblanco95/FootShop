import React, { useState } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';

export const CounterComponent = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1)

    const sumar = () => {
        if (counter < stock.stock) {
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
        if (value > stock.stock) {
            setCounter(stock.stock)
        } else {
            setCounter(value)
        }
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Button onClick={restar}>-</Button>
                <FormControl type="number" value={counter} onChange={manualChange} />
                <Button onClick={sumar}>+</Button>
            </InputGroup>
            <Button onClick={() => onAdd(counter)} variant="primary">Agregar al Carrito</Button>
        </>
    )
}
