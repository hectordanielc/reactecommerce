import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <Link className="logo" to="/">
            <h3>Ecommerce</h3>
            </Link>
            <div className="productOptions">
                <NavLink to={`/category/celular`} className={({isActive}) => isActive ? 'activeOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={`/category/tablet`} className={({isActive}) => isActive ? 'activeOption' : 'Option'}>Tablets</NavLink>
                <NavLink to={`/category/notebook`} className={({isActive}) => isActive ? 'activeOption' : 'Option'}>Notebooks</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar