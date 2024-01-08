import { Link } from "react-router-dom"
import './admin.css'

export default function Admin(){
    return (
        <div className="wrapper">
            <div className="navigation">
                <Link to='/admin/orders'><button>Orders</button></Link>
                <Link to='/admin/records/submit'><button>Submit</button></Link>
            </div>
        </div>
    )
}