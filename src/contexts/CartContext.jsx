import {createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const agregarItem = (item) => {
        const index = cart.findIndex(i => i.id === item.id);
        if (index < 0) {
            setCart([...cart, item]);
        } else {
            const nuevaCant = cart[index].cantidad + item.cantidad;
            setCart(cart.map((p, i) => {
                return i === index
                    ? {...p, cantidad: nuevaCant}
                    : p;
            }));
        }
    }

    const cantidad = () => {
        return cart.reduce((accum, curr) => accum + curr.cantidad, 0);
    }

    const precioTotal = () => {
        return cart.reduce((accum, curr) => accum + curr.cantidad * curr.precio, 0);
    }

    const maxComprable = (item) => {
        const cants = cart.filter(p => p.id === item.id);
        return cants.reduce((accum, curr) => accum - curr.cantidad, item.stock);
    }

    const vaciar = () => {
        setCart([]);
    }

    const borrarItem = (id) => {
        setCart(cart.filter(p => p.id != id));
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarItem,
            cantidad,
            maxComprable,
            vaciar,
            precioTotal,
            borrarItem
        }}>
            {children}
        </CartContext.Provider>
    );
}