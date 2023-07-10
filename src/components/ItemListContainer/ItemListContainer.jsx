import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const productsRef = !categoryId
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(productsRef)
            .then((querySnapshot) => {
                const productsAdapted = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
                setProducts(productsAdapted)
    })
    
    }, [categoryId])


    return (
        <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;
