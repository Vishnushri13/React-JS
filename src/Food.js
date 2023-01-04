import React from "react";
import img14 from './veg img14.png';
//import Menu from './Menu.js';
export default function About(){
    return(
    <>
    
             <div className="row">

                <div className="col-lg-6 pt-5 pl-5">
                   <h1 className="text-success pl-5">ORGANIC FARNING</h1>
                   <h1 className="text-danger">Of Organic Food</h1>
                   <p>
                    Organic principles and regulations are also designed to ensure that animals are treated humanely, or, to be brutally honest, as humanely as possible. There are strict rules on the way in which animals are housed, guaranteeing a degree of comfort for the animals. But when it comes to vegetables, the situation is quite different. 
                   </p>
                   <input type={"button"} value="LEARN MORE" className="btn-outline-warning bg-warning text-white p-3 ml-3"/><br/><br/>
                </div> 

                <div className="col-lg-6">
                    <img src={img14} className="an"/>
                </div>  
             </div>
</>
    );
}      