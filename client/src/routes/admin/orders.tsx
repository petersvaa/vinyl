import { useState, useEffect } from 'react';
import './orders.css';
import { Link } from "react-router-dom";

export default function Orders() {
    const [orders, setOrders] = useState([])

    const getOrdersData = async () => {
        const response = await fetch('http://localhost:3000/orders').then(response => response.json())
        setOrders(response)
    }

    useEffect(() => {
        getOrdersData()
    }, [])

    const ordersItems = orders.map((order: any) => {
        return (            
            <tr>
                <td>{order.id}</td>
                <td>{ new Date(order.created_timestamp * 1000).toLocaleString('en-GB', { timeZone: 'UTC' }).replace(/\//g, '-') }</td>
                <td>{order.paid ? 'Áno' : 'Nie'}</td>
                <td><Link to={'/admin/orders/' + order.id}>Otvoriť</Link></td>
            </tr>
        );
    })

    return (
        <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Čas vytvorenia objednávky</th>
                    <th>Zaplatené</th>
                </tr>
                { ordersItems }
            </table>
        </>
    )
}