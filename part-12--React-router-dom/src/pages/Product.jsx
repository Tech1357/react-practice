import {Link, Outlet} from "react-router-dom"
function Product(){
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Product Page
            </h1>
            <Link to="/product/men">Men</Link>
            <Link to="/product/women">Women</Link>
            <Outlet/>
        </div>
    )
}

export default Product;