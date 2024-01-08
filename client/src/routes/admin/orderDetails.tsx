import { useState, useEffect } from "react";
import './orderDetails.css';
import { Link, useParams } from "react-router-dom";

export default function OrderDetails(){
    const { id } = useParams()

    const [order, setOrder] = useState({id: 0,paid:false,created_timestamp:0,items:[], name:'',surname:'',street:'',city:'',postal_code:'',phone:'',email:''})

    const getOrderData = async () => {
        const response = await fetch('http://localhost:3000/orders/' + id).then(response => response.json())
        setOrder(response)
    }

    useEffect(() => {
        getOrderData()
    }, [])

    const setPaid = async () => {
        const data = {
            id: order.id,
            paid: order.paid ? false : true,
        }
        const response = await fetch('http://localhost:3000/orders/paid',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
        getOrderData();
    }

    const deleteOrder = async () => {
        const data = {
            id: order.id
        }
        const response = await fetch('http://localhost:3000/orders/delete',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
        window.location.replace('/admin/orders');
    }

    return(
        <>
            <h1>Objednávka č.{id}</h1>

            <h2>Údaje o objednávke</h2>
            <p>ID: {order.id}</p>
            <p>Vytvorené: {new Date(order.created_timestamp * 1000).toLocaleString('en-GB', { timeZone: 'UTC' }).replace(/\//g, '-')}</p>
            <p>Zaplatené: {order.paid ? 'Áno' : 'Nie'}</p>

            <p>Produkty:</p>
            {order.items.map((item: any) => {
                return <Link className="order-item" to={'/records/' + item.hook}>{item.artist} - {item.album} (€{item.price})</Link>
            })}

            <h2>Fakturačné údaje</h2>
            <p>Meno: {order.name}</p>
            <p>Priezvisko: {order.surname}</p>
            <p>Telefón: {order.phone}</p>
            <p>E-mail: {order.email}</p>
            <p>Ulica: {order.street}</p>
            <p>Mesto: {order.city}</p>
            <p>PSČ: {order.postal_code}</p>

            <div className="actions">
                <button onClick={setPaid}>{order.paid ? 'Označiť ako nezaplatené' : 'Označiť ako zaplatené'}</button>
                <button onClick={deleteOrder}>Odstrániť objednávku</button>
            </div>            
        </>
    )
}