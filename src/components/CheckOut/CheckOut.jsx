import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useState } from 'react'
import { db } from '../../services/firebase/firebaseConfig'
import CheckOutForm from '../CheckOutForm/CheckoutForm'
import { collection, addDoc, Timestamp, writeBatch, query, where, getDocs, documentId } from 'firebase/firestore'
import './CheckOut.css'

const Checkout = () => {
    const [orderId, setOrderId] = useState("")
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, total } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                date: Timestamp.fromDate(new Date()),
                total: total
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map((prod) => prod.item.id)
            const productsRef = query(collection(db, 'products'))
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach((doc) => {
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock
                const productAddedToCart = cart.find((prod) => prod.item.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDB >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDB - prodQuantity })
                } else {
                    outOfStock.push({ ...dataDoc, id: doc.id })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()
                const ordersRef = collection(db, 'orders')
                const orderAdded = await addDoc(ordersRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.log('No hay productos fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <p className="CheckoutLoading">Se está generando su orden...</p>
    }

    if (orderId) {
        return (
            <div className="CheckoutContainer">
                <div className="CheckoutOrder">
                    <h2 className="CheckoutOrderHeader">Gracias por tu compra</h2>
                    <p className="CheckoutOrderNumber">Tu número de orden es {orderId}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="CheckoutContainer">
            <h2 className="CheckoutFormTitle">Checkout</h2>
            <CheckOutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout
