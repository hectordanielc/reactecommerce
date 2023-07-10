import { useState } from 'react'
import './CheckOutForm.css'

const CheckOutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleName = (e) => {
        e.preventDefault()

        const userData = {
            name,
            phone,
            email
        }

        onConfirm(userData)
    }

    return (
        <div className="CheckoutForm">
            <form className="Form">
                <label className="Label">Nombre
                    <input className="Input" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label className="Label">Teléfono
                    <input className="Input" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </label>
                <label className="Label">Email
                    <input className="Input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
            </form>
                <div className="">
                    <button className="Button" onClick={handleName}>Confirmar</button>
                </div>
        </div>
    )
}

export default CheckOutForm
