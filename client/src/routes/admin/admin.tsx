import { Link } from "react-router-dom"
import './admin.css'

export default function Admin(){
    return (
        <>
            <div className="wrapper">
                <div className="navigation">
                    <h1>Admin</h1>
                    <Link to='/admin/orders'><button>Objednávky</button></Link>
                    <Link to='/admin/records/submit'><button>Produkty</button></Link>
                    <Link to='#'><button>Štatistiky</button></Link>
                </div>
            </div>
        </>
    )
}