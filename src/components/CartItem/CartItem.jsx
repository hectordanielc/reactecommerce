import { Link } from 'react-router-dom'
import { useContext } from 'react'
import "./CartItem.css"
import { CartContext } from '../../context/CartContext'



const CartItem = ({ item,quantity}) => {

    const {removeItem} = useContext(CartContext)

    const itemId = item.id
    
    return (
        <article className="CartCardItem">
            <header className="CartHeader">
                <h2 className="CartItemHeader">{item.name}</h2>
            </header>
            <picture>
                <img src={item.img} alt={item.name} className="CartItemImg"/>
            </picture>
            <section>
                <p className="CartInfo"> Precio: ${item.price}</p>
                <p className="Info"> Cantidad: {quantity}</p>
            </section>
            <footer className="RemoveItem">
                <button className="RemoveItemBtn" onClick={() => removeItem(itemId)}>Eliminar</button>
            </footer>
        </article>
    )
}

export default CartItem