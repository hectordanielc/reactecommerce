import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, price, img, stock, description, category}) => {
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
            </section>
            <footer className="ItemFooter">
                <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log(`Agregaste ${quantity} productos al carrito`)} />
            </footer>
        </article>
    )
}

export default ItemDetail