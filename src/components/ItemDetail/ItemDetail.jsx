import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { useContext } from "react";

import {CartContext} from "../../context/CartContext"

const ItemDetail = ({id, name, price, img, stock, description, category}) => {

    const[quantity, setQuantity] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const item = {
            id, name, price,img,stock
        }
        addItem(item, quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info"> Categoria: {category}</p>
                <p className="Info"> Descripción: {description}</p>
                <p className="Info"> Precio: ${price}</p>
                <p className="Info"> Stock: {stock}</p>
            </section>
            <footer className="ItemFooter">
                {
                    quantity > 0 ?(
                    <Link to="/cart" className="option">Terminar Compra</Link>
                    ) : (
                    <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail