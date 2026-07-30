import {useState} from "react";
function App(){
    const [title,setTitle] = useState("");
    const [details,setDetails] = useState("");
    const [notes,setNotes] =useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        const copyNotes=[...notes];
        copyNotes.push({title,details});
        setNotes(copyNotes);
        setTitle("");
        setDetails("");
    };

    return (
        <div className="h-screen lg:flex gap-6 mx-10 mt-10 text-white">
            <form onSubmit={submitHandler}> 
                <div className="text-white flex flex-col gap-4 mx-10 mt-10">
                    <h1 className="text-2xl font-bold">Add Notes</h1>
                    <input className="px-5 py-2 h-10 w-80 font-medium border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter Notes Heading" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    <textarea className="px-5 py-2 h-30 w-80 font-medium border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter Notes Details" value={details} onChange={(e)=>setDetails(e.target.value)} />
                    <button className="px-4 py-2 active:scale-95 font-medium bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Add Notes</button>
                </div>
            </form>
            <div className="p-4 mt-6 mx-10">                
                <h2 className="text-2xl font-bold mb-4">Recent Notes</h2>
                <div className="flex flex-wrap gap-4">
                    {notes.map((note,idx)=>(
                        <div key={idx} className="h-40 w-30 bg-cover border border-gray-300 rounded p-4 text-black bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
                            <h3 className="text-xl font-bold">{note.title}</h3>
                            <p className="text-black-200">{note.details}</p>
                            <button className="px-2 py-1 mt-2 active:scale-95 font-medium bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={()=>{
                                const copyNotes=[...notes];
                                copyNotes.splice(idx,1);
                                setNotes(copyNotes);
                            }}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App