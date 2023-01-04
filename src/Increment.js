import React, { useState } from "react";
import Menu1 from "./Menu1";


export default function Increment(){
    
    const[increment,setIncrement]=useState(0)
    function incre(){
        setIncrement(increment-1)
    }
    
    return(
        <>
        <Menu1/>
        <div>
            <h1>{increment}</h1>
            <button onClick={() => setIncrement(increment+1)}>increment</button>
            <input type={"button"} onClick={incre} value="decrement"/>
            <button onClick={() => setIncrement(increment*0)}>reset</button>
        </div>
        </>
    );
}
