import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import './record.css'
import { CartContext } from "../App"

export default function Record() {
    const { hook } = useParams()

    const [record, setRecord] = useState({
        id: 0,
        artist: '',
        album: '',
        cover: '',
        description: '',
        price: 0,
        hook: '',
    })

    const getRecordData = async () => {
        const response = await fetch('http://localhost:3000/records/' + hook).then(response => response.json())
        setRecord(response)
    }

    useEffect(() => {
        getRecordData();
    }, [])

    const addToCart = async () => {
        const data = {
            items: [record.id]
        }
        const response = await fetch('http://localhost:3000/order/submit',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
        console.log(response)
    }

    return (
        <>
            <div className="heading">
                <div className="record-container">
                    <div className="primary-side">
                        <img src={record.cover} />
                    </div>
                    <div className="secondary-side">
                        <div>
                            <h2 className="title">{record.artist} <br />
                                {record.album}</h2>
                            <p>{record.description}</p>
                        </div>
                        <div>
                            <h3>€{record.price.toFixed(2)}</h3>
                            <button onClick={addToCart} id="order-button" className="btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}