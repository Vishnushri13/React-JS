import React from "react";
import img10 from './veg img10.jpg';
//import Menu from './Menu.js';
export default function Destimonial(){
    return(
        <>
        
           <div>
             <div className="row">
                <div className="col-lg-6">
                    <img src={img10} className="ak"/>
                </div>  
                <div className="col-lg-6 pt-5">
                   <h1 className="text-success pl-5">HAPPY FARNING</h1>
                   <h1 className="text-danger">Happy animals</h1>
                   
                   <p>
                    The idea that happier form animals produce higher quality food is not new, and it seems to be catching on. Several small scale egg farmers have transitioned to a "pastured" system, allowing their chickens to room freely to eat grass and bugs the way nature intended. These chickens are not simply "free range" or "cage free", which are terms that unfortunately don't have much meaning in today's food market.
                   </p>
                   <input type={"button"} value="LEARN MORE" className="btn-outline-warning bg-warning text-white p-3 ml-3"/>
                </div>  

             </div>
            </div>
            </>
    );
}      