import {useState} from 'react'
import './ItemCount.css'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'



const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const {addItem} = useContext(CartContext)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
        else {
            console.log(stock)
        }
    }

    const decrement = () => {
        if (quantity > initial) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="Counter">
            <div className="Controls">
                <button className = "Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className = "Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className = "Button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount