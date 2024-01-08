import './completeOrder.css'
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

export default function CompleteOrder(){
    const { id } = useParams()

    const [order, setOrder] = useState({})
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')

    const submitOrder = async (event: FormEvent) => {
        event.preventDefault();
        const data = {
            name: name,
            surname: surname,
            email: email,
            phone: phone,
            street: street,
            city: city,
            postalCode: postalCode,

            items: [id]
        }
        const response = await fetch('http://localhost:3000/orders/submit',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
        alert('Objednávka bola úspešne odoslaná.')
    }
    return (
        <>
        <h2>Objednávka</h2>
        <form onSubmit={submitOrder}>
            <div className='form-fields'>
                <h3>Fakturačné údaje</h3>
                <div className="name-wrapper">
                    <input placeholder="Meno" name='name' value={name} onChange={(e) => setName(e.target.value)} type="text" required/>
                    <input placeholder="Priezvisko" name='surname' value={surname} onChange={(e) => setSurname(e.target.value)} type="text" required/>
                </div>
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' required/>
                <input type="number" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Telefónne číslo' required/>
                <input type="text" name='street' value={street} onChange={(e) => setStreet(e.target.value)} placeholder='Ulica a číslo domu' required/>
                <div className="address-wrapper">
                    <input name='city' value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder='Mesto' required/>
                    <input name='postal-code' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className='postal-code' type="text" placeholder='PSČ' required/>
                </div>

                <h3>Spôsob platby</h3>
                <div className='pay'>
                    <input type="radio" id='transfer' value='transfer' name='payment' required/>
                    <label htmlFor="transfer">Prevodom</label>
                </div>
            </div>
            <button className='' type="submit">Odoslať objednávku</button>
        </form>
        </>
    )
}