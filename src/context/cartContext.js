import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const addItem = ({ item, quantity }) => {
        setCarrito([{
            item: item,
            cantidad: quantity
        }, ...carrito])
        console.log(carrito)

    }

    const vaciarCarrito = () => setCarrito([]);

    useEffect(() => {
        const localCart = localStorage.getItem('carrito');
        if (!localCart) localStorage.setItem('carrito', JSON.stringify([]));
        else setCarrito(JSON.parse(localCart));
    }, []);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])

    return (
        <CartContext.Provider value={{ addItem, carrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}