import { createContext, useState } from "react";

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
            setCart(prev => [...prev, { item, quantity }])
            setTotalQuantity((prevTotal) => prevTotal + quantity)
            setTotal((prevTotal) => prevTotal + (item.price * quantity))
            console.log(cart)
        } else {
            //actualize quantity 
            const cartUpdated = cart.map((prod) => {
                if (prod.item.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity }
                }
            })
            setCart(cartUpdated)
            setTotalQuantity((prevTotal) => prevTotal + quantity)
            setTotal((prevTotal) => prevTotal + (item.price * quantity))

            // console.log("El Item ya está en el carrito solo actualicé cantidad")
        }
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
        <CartContext.Provider value={{ cart, totalQuantity,total, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}