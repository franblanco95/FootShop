import React, { useState } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';

export const CounterComponent = ({ stock }) => {
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
        <div>
            <InputGroup className="mb-3 w-75 align-items-center">
                <Button onClick={restar}>-</Button>
                <FormControl type="number" value={counter} onChange={manualChange}/>
                <Button onClick={sumar}>+</Button>
            </InputGroup>
        </div>
    )
}
