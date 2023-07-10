import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
// 
const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(cart);
    }, [cart]);

    if (totalQuantity === 0) {
        return (
            <div className="CartContainer">
                <h1>No hay productos en el carrito</h1>
                <Link to="/" className="option">
                    Volver al inicio
                </Link>
            </div>
        );
    }

    return (
        <div className="CartContainer">
            <button onClick={() => clearCart()} className="Button">
                Limpiar Carrito
            </button>
            {cartItems.map((p) => (
                <div className="CartItemContainer" key={`cartItem${p.item.id}`}>
                    <CartItem {...p} />
                </div>
            ))}
            <h2 className="CartTotal">Total: ${total}</h2>

            <Link to="/checkout" className="option">
                Checkout
            </Link>
        </div>
    );
};

export default Cart