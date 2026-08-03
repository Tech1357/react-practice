import {Routes, Route} from "react-router-dom"
import {Link} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Product from "./pages/Product.jsx"
import Contact from "./pages/Contact.jsx"
import Men from "./pages/Men.jsx"
import Women from "./pages/Women.jsx"
import Navbar from "./pages/Navbar.jsx"

function App(){
    return (
        <div>
            <Navbar />
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/contact">Contact</Link>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />}>
                    <Route path="men" element={<Men />} />
                    <Route path="women" element={<Women />} />
                    <Route path=":id" element={<h1>Product Details</h1>} /> //dynamic route for product details page where id is a parameter that can be accessed using useParams hook in the component.
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>404 - Page Not Found </h1>} />
            </Routes>
        </div>
    )
}

export default App;