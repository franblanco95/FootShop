import { createContext, useState, useEffect } from 'react';
import { getFirestore } from '../firebase/client';

export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {



    const [carrito, setCarrito] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [productos, setProductos] = useState([])

    //Traigo a los productos de la DB de Firestore
    const getData = () => {
        const db = getFirestore();

        const itemsCollection = db.collection('productos');
        itemsCollection.get().then((value) => {
            if (value.size === 0) {
                console.log('No results')
            }
            const aux = value.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            });
            setProductos(aux)
        })

    }

    useEffect(() => {
        getData();
    }, [])

    //Funcion para crear orden en Firebase al finalizar la compra

    function createOrder(e, name, email, phone) {
        e.preventDefault()
        const db = getFirestore();
        console.log(name, email, phone)
        //Creamos una coleccion orders en firebase
        const order = { buyer: { name, phone, email }, item: carrito, total: totalPrice };
        db.collection("orders").add(order).then(({ id }) => {
            console.log(id);
        });
    }


    //Controla si el elemento ya esta en el carrito
    const isInCart = (id) => carrito.some(product => product.id === id)

    //Agregar Item al carrito
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

    // Calculo cantidad de cada producto en carrito para actualizar stock en item detail
    const getItemQty = ({ product }) => {
        const carritoLength = carrito.length;
        if (carritoLength === 0) {
            return 0;
        } else {
            for (let i = 0; i < carritoLength; i++) {
                if (carrito[i].id === product.id) {
                    return carrito[i].quantity;
                }
            }
            return 0;
        }
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const removeItem = (index) => {
        setCarrito(carrito.filter((_, i) => i !== index))
    }

    const getTotalPrice = () => {
        let total = carrito.reduce((acc, cur) => {
            return (cur.price * cur.quantity) + acc
        }, 0);
        // el 0 es el primer valor que le damos a la variable acc
        setTotalPrice(total);
    }

    //Funciones localStorage

    useEffect(() => {
        const localCart = localStorage.getItem('carrito');
        if (!localCart) localStorage.setItem('carrito', JSON.stringify([]));
        else setCarrito(JSON.parse(localCart));
    }, []);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        getTotalPrice();
    }, [carrito])

    return (
        <CartContext.Provider value={{ addItem, carrito, setCarrito, vaciarCarrito, removeItem, totalPrice, productos, setProductos, getItemQty, createOrder }}>
            {children}
        </CartContext.Provider>
    )
}