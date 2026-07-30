import { useEffect } from "react";
import { useState } from "react";
function App(){

    // localStorage.setItem("name","Ramya");
    // const name=localStorage.getItem("name");
    // console.log(name);

    // localStorage.setItem("age",20);
    // const age=Number(localStorage.getItem("age"));
    // console.log(age);

    // const user={
    //     username:"Ramya",
    //     email:"ramya@gmail.com"
    // }    
    // localStorage.setItem("user",JSON.stringify(user));
    // const userData=JSON.parse(localStorage.getItem("user"));
    // console.log(userData);

    // localStorage.removeItem("name");
    // localStorage.clear();


    // useEffect Usage 
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("count updated");
    },[count]);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default App;