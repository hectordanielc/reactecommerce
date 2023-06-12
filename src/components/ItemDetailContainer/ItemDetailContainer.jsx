import { useState, useEffect } from "react";
import {getProductById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const {ItemId} = useParams()

    useEffect(() => {
        getProductById(ItemId)
            .then((res) => setProduct(res))
            .catch((err) => console.log(err))
    }, [ItemId])

    return (
        <div>
            <ItemDetail {...product}/>
        </div>
    );
}

export default ItemDetailContainer;