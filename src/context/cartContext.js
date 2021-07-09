import { createContext, useState } from 'react';

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

    return (
        <CartContext.Provider value={{ addItem, carrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}