import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const vaciarCarrito = () => setCarrito([]);

    //Controla si el elemento ya esta en el carrito
    const isInCart = (id) => carrito.some(product => product.id === id)

    const addItem = ({ product }, quantity) => {
        if (isInCart(product.id)) {
            const newCart = carrito.map(cartElement => {
                if (cartElement.id === product.id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity }
                } else return cartElement;
            })
            setCarrito(newCart);
        } else {
            setCarrito(prev => [...prev, { ...product, quantity }]);
        }
    }

    const removeItem = (index) => {
        let updatedCart = carrito;
        updatedCart.splice(index, 1);
        setCarrito(updatedCart);
    }

    useEffect(() => {
        const localCart = localStorage.getItem('carrito');
        if (!localCart) localStorage.setItem('carrito', JSON.stringify([]));
        else setCarrito(JSON.parse(localCart));
    }, []);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])

    return (
        <CartContext.Provider value={{ addItem, carrito, setCarrito, vaciarCarrito, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}