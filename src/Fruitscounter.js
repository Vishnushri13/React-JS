import React from "react";
import fruit1 from './fruit1.jpg';
import fruit2 from './fruit2.jpg';
import Menu1 from "./Menu1";

export default function Fruitscounter(){
    return(
        <>
        <Menu1/>
        <div className="fr p-5">
            <div className="fru row mt-5 ">
               <h1 className="col-lg-12 text-center">Bob ate <span className="text-warning">4</span> mangoes <span className="text-warning">5</span> bananas </h1>
               <div className="col-lg-6">
                 <img src={fruit1} className="fru1"/><br/>
                  <button className="bg-primary ml-3">Eat Mango</button>
               </div>
               <div className="col-lg-6">
                <img src={fruit2} className="fru1"/><br/>
                <button className="bg-primary ml-3">Eat Banana</button>
               </div>
            </div>

        </div>
        
        </>
    )
}