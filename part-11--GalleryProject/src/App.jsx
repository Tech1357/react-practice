import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";

function App(){
    const [userData, setUserData] = useState([])
    const [idx,setIdx] =useState(1);
    
    const getData = async()=>{
        const response = await axios.get(`https://picsum.photos/v2/list?page=${idx}&limit=30`);
        //userData.push(response.data);
        setUserData(response.data)
    }

    useEffect(getData,[]); // we are calling the getData function when the component is mounted for the first time meaning when the page is loaded for the first time. when i refresh the page, the getData function will be called again and again. so we have to use useEffect hook to call the getData function only once when the component is mounted for the first time.

    const prevpage=()=>{
        if (idx>1){
            setIdx(idx-1);
            getData();
        }
    }

    const nextPage=()=>{
        setIdx(idx+1);
        getData();
    }

    return (
        <div>
            <div>Loading...</div>
            <button className="bg-blue-500 overflow-auto text-white px-4 py-2 m-4 rounded active:scale-95" onClick={getData}>Get Data</button>
            <div className="flex flex-wrap justify-evenly gap-5 m-1 w-full">
                {userData.map(function(elem,idx){
                    return(
                        <a key={idx} href={elem.url} target="_blank">
                            <div className="flex flex-col" key={idx}>
                                <img className="h-40 w-40 rounded-xl object-cover" src={elem.download_url} alt="" />
                                <h3 className="text-lg font-bold mt-2">{elem.author}</h3>
                            </div>
                        </a>
                    )
                    
                })}
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-blue-500 text-white px-4 py-2 m-4 rounded active:scale-95" onClick={prevpage}>Prev</button>
                <button className="bg-blue-500 text-white px-4 py-2 m-4 rounded active:scale-95" onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}

export default App;