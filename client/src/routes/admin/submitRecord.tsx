import { useState } from "react"
import './submitRecord.css'

export default function SubmitRecord() {
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [cover, setCover] = useState('')
    const [hook, setHook] = useState('')

    const generateHook = (_cover: string) => {
        var str = _cover.split('.')[0]
        return str.toLowerCase()
    }
    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let _cover;
        if(cover.startsWith('.')) {
            _cover = '/records/' + hook + cover
        } else {
            _cover = cover
        }
        const data = {
            artist: artist,
            album: album,
            description: description,
            price: Number(price),
            cover: _cover,
            hook: hook
        }
        const response = await fetch('http://localhost:3000/admin/records/submit',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    return (
        <>
            <form onSubmit={submit}>
                <input placeholder="Umelec" type="text" value={artist} onChange={e => setArtist(e.target.value)} />
                <input placeholder="Album" type="text" value={album} onChange={e => setAlbum(e.target.value)} />
                <input placeholder="Popis" type="text" value={description} onChange={e => setDescription(e.target.value)} />
                <input placeholder="Cena" type="text" value={price} onChange={e => setPrice(e.target.value)} />
                <input placeholder="Cover" type="text" value={cover} onChange={e => setCover(e.target.value)} />
                <input placeholder="Hook" type="text" value={hook} onChange={e => setHook(e.target.value)} />
                <button className="btn-primary" type="submit">Odoslať</button>
            </form>
        </>
    )
}