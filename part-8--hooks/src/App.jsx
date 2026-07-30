import Counter from "./components/Counter"
import {useState} from "react"

function App(){
    const[name,setName] = useState("");

    function naming(e){
        setName(e.target.value);
        console.log(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
        setName("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="Enter your name" value={name} onChange={naming}  />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App

