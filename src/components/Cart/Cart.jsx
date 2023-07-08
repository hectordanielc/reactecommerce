import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
// import "./Cart.css";
// 
const Cart = () => {
    const { cart, clearCart, totalQuantity,total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to="/" className="option">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={`cartItem${p.id}`} {...p}/>)}
            <h2>Total: ${total}</h2>
            <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
            <Link to="/checkout" className="Option">Checkout</Link> 
        </div>
    )
}

export default Cart