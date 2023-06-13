import {BsCart3} from 'react-icons/bs'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='iconContainer'>
            <BsCart3 className='cartIcon'/>
            0
        </div>
    )
}

export default CartWidget