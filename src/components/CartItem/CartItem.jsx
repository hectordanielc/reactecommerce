import { useContext, useState } from 'react'
import "./CartItem.css"
import { CartContext } from '../../context/CartContext'

const CartItem = ({ item, quantity }) => {
    const { removeItem, addItem } = useContext(CartContext)
    const [cartItemQuantity, setCartItemQuantity] = useState(quantity)

    const stock = item.stock

    const increment = () => {
        if (cartItemQuantity < stock) {
            setCartItemQuantity(cartItemQuantity + 1)
            addItem(item, 1)
        } else {
            console.log(stock)
        }
    }

    const decrement = () => {
        if (cartItemQuantity > 1) {
            setCartItemQuantity(cartItemQuantity - 1)
            addItem(item, -1)
        }
    }

    return (
        <article className="CartCardItem">
            <div className="CartHeaderPicture">
                <header className="CartHeader">
                    <h2 className="CartItemHeader">{item.name}</h2>
                </header>
                <picture>
                    <img src={item.img} alt={item.name} className="CartItemImg" />
                </picture>
            </div>

            <section>
                <p className="CartItemPrice">Precio: ${item.price}</p>
                <p className="CartItemStock">Stock: {item.stock}</p>
                <p className="CartItemQuantity">Cantidad</p>
                <div className="CartItemCounter">
                    <button className="Button" onClick={decrement}>-</button>
                    <h4 className="Number">{cartItemQuantity}</h4>
                    <button className="Button" onClick={increment}>+</button>
                </div>
            </section>

            <footer className="RemoveItem">
                <p className="CartItemTotal">Subtotal: ${item.price * cartItemQuantity}</p>
                <button className="RemoveItemBtn" onClick={() => removeItem(item.id)}>Eliminar</button>
            </footer>
        </article>
    )
}

export default CartItem
