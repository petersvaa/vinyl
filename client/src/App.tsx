import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './routes/home';
import Record from "./routes/record";
import SubmitRecord from "./routes/admin/submitRecord";
import Navbar from "./components/navbar";
import Cart from "./routes/cart";
import { useState, createContext } from "react";

export const CartContext = createContext([]);

export default function App() {
    const [cart, setCart] = useState([])
    
    return (
        <>
            <CartContext.Provider value={{cart, setCart}}>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/records/:hook" element={<Record />} />
                        <Route path="/admin/record/submit" element={<SubmitRecord />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </main>
            </CartContext.Provider>
        </>
    );
}