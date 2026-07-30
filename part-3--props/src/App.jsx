import React from "react";
import Card from "./Components/Card";

function App(){
    return (
        <div>
            <Card user="Ramya" age={20} domain="FSD"/>
            <Card user="John" age={25} domain="Backend"/>
            <Card user="Jane" age={30} domain="Frontend"/>
        </div>
    )
}

export default App;