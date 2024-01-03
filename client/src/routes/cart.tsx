import './cart.css'
import { useContext } from 'react'
import { CartContext } from '../App'



export default function Cart() {
    const cart = useContext(CartContext)

    function IsEmpty(){
        if (cart.length < 1) {
            return <p className='empty-notification'>Košík je prázdny</p>
        }
        return null
    }
    return(
        <>
            <h2>Košík</h2>
            <table className='cart-table'>
                <thead>
                    <tr>
                        <td>Názov</td>
                        <td>Cena</td>
                        <td>Počet</td>
                    </tr>
                </thead>
            </table>
            <IsEmpty />
        </>
    )
}