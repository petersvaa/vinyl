import { useContext, useState } from "react"
import { CartContext } from "../App"
import { Link } from "react-router-dom"
import './navbar.css'


export default function Navbar() {
    const cartContext = useContext(CartContext)
    const [cart, setCart] = useState(cartContext)


    return (
        <>
            <nav className="navbar">
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to="/">Domov</Link>
                </div>
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to="/cart">Košík ({cartContext.length})</Link>
                </div>
            </nav>
        </>
    )
}