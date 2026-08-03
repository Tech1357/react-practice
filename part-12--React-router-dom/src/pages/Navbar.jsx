import {useNavigate} from "react-router-dom"
function Navbar(){
    const navigate = useNavigate()
    const btnClicked=()=>{
            navigate("/")
        }
    return (
        <div>
            <button onClick={btnClicked}>Return to Home</button>
            <button onClick={()=>navigate(-1)}>Prev</button>
            <button onClick={()=>navigate(1)}>Next</button> 
        </div>
    )
}

export default Navbar;