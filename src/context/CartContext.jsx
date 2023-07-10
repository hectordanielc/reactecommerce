import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(
    {
        cart: []
    }
)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            const updatedCart = [...cart, { item, quantity }]
            const updatedTotalQuantity = totalQuantity + quantity
            const updatedTotal = total + item.price * quantity
            setCart(updatedCart)
            setTotalQuantity(updatedTotalQuantity)
            setTotal(updatedTotal)
            return
        }
        const cartUpdated = cart.map((prod) =>
            prod.item.id === item.id && prod.quantity + quantity <= item.stock
                ? { ...prod, quantity: prod.quantity + quantity }
                : prod
        )
        const updatedTotalQuantity = cartUpdated.reduce(
            (total, prod) => total + prod.quantity,0)
        const updatedTotal = cartUpdated.reduce(
            (total, prod) => total + prod.item.price * prod.quantity,0)
        setCart(cartUpdated)
        setTotalQuantity(updatedTotalQuantity)
        setTotal(updatedTotal)
    }

    const removeItem = (itemId) => {
        const itemToRemove = cart.find((prod) => prod.item.id === itemId);
        if (itemToRemove) {
            const cartUpdated = cart.filter((prod) => prod.item.id !== itemId);
            setCart(cartUpdated);
            setTotalQuantity((prevTotal) => prevTotal - itemToRemove.quantity); // Actualizar totalQuantity
            setTotal((prevTotal) => prevTotal - (itemToRemove.item.price * itemToRemove.quantity)) // Actualizar total
        }
    };

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
        setTotal(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.item.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}