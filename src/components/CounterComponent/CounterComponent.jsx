import React, { useState, useContext } from 'react'
import './CounterComponent.css'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext'

export const CounterComponent = ({ stock, title, price, id }) => {

    const cartContext = useContext(CartContext)

    const terminarCompra = () => {
        const aux = {
            item: {
                titulo: title,
                precio: price
            },
            quantity: counter
        }
        console.log(aux)
        // preguntar si el id de ese objeto ya se encuentra en el carrito
        cartContext.addItem(aux)

    }

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
            <Button onClick={terminarCompra} variant="primary">Agregar al Carrito</Button>
            <Link to="/cart">
                <Button className="ms-2">Ir al Carrito</Button>
            </Link>
        </>
    )
}
