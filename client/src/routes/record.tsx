import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import './record.css'
import api from "../api"

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
        const response = await api.get('/records/' + hook).then(response => response.data)
        setRecord(response)
    }

    useEffect(() => {
        getRecordData();
    }, [])

    const addToCart = () => {
        window.location.href = '/complete-order/' + record.id
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
                            <button onClick={addToCart} id="order-button" className="btn-primary">Objednať</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}