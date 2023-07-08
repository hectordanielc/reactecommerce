import {BsCart3} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => { 
    const {totalQuantity} = useContext(CartContext)


    return (

            <Link to="/cart" className='cartWidget' style={{display: totalQuantity === 0 ? 'none' : 'block' }}>
                <div className='IconNumber'>
                    <BsCart3 className='cartIcon'/>
                    {totalQuantity}
                </div>
            </Link>

    )
}

export default CartWidget