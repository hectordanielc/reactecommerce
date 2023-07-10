import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

import { getDoc, doc} from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then((doc) => {
                const productAdapted = {id: doc.id, ...doc.data()}
                setProduct(productAdapted)
            })


    }, [itemId])
    
    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    );
}

export default ItemDetailContainer;