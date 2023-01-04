import React from "react";
import Menu1 from "./Menu1"

export default function Datefunction(){

    function  datafu(){
    
        var dat=document.getElementById("dat").value;
        var date1= new Date(dat);
        date1.setDate(date1.getDate()+90);
        document.getElementById("t1").innerHTML=date1.getDate()+"/"+date1.getMonth()+"/"+date1.getFullYear();

    } 
    
    return(
        <>
        <Menu1/>
        <div>
          
            <input type={"date"} id="dat" name="sta"/>
            
            <button onClick={datafu}>Calculate date</button>
             <h1 id="t1"></h1>
        
         </div>
        </>
    )
}