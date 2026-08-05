import {useContext} from "react";
import UserContext from "./UserContext"
function Navbar(){
    const user=useContext(UserContext);
    return (
        <div>
            <h1>Welcome {user}</h1>
        </div>
    )
}

export default Navbar;