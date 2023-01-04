import React from "react";
import img from './rcb.png';
import img1 from './csk.png';
import './Super Over League.css';
import Menu1 from './Menu1';
export default function Super()
{
    return(
        <>
        <Menu1/>
        <div className="ca">
            <br/>
           <h1>Super Over League</h1><br/><br/>
          <div className="cb row">
            <div className="col-lg-12">
                <img src={img} className="sbim"/>
             
                <img src={img1} className="sbim"/>
            </div>
           </div>
        </div>
        </>
    );
}