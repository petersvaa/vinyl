import { useState, useEffect } from "react"
import './home.css'
import { Link } from "react-router-dom"
import recordImage from '../assets/images/record.png'

export default function Home() {    
    const [records, setRecords] = useState([])
    

    const getRecordsData = async () => {
        const response = await fetch('http://localhost:3000/records').then(response => response.json())
        setRecords(response)
    }

    useEffect(() => {
        getRecordsData()
    }, [])

    const recordsItems = records.map((record: any) => {
        return (
        <Link to={'/records/' + record.hook} className="record-wrapper" key={record.id} >
            <img className="cover-image" src={record.cover} />
        </Link>
        );
    })

    return (
        <>
            <h1>Home</h1>
            <div className="records-library">
                {recordsItems}
            </div>
        </>
    )
}