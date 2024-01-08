import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './routes/home';
import Record from "./routes/record";
import SubmitRecord from "./routes/admin/submitRecord";
import Navbar from "./components/navbar";
import Cart from "./routes/cart";
import Orders from "./routes/admin/orders";
import OrderDetails from "./routes/admin/orderDetails";
import CompleteOrder from "./routes/completeOrder";
import Admin from "./routes/admin/admin";
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
                        <Route path="/admin/records/submit" element={<SubmitRecord />} />
                        <Route path="/admin/orders" element={<Orders />} />
                        <Route path="/admin/orders/:id" element={<OrderDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/complete-order/:id" element={<CompleteOrder />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </main>
            </CartContext.Provider>
        </>
    );
}