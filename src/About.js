import React from "react";
import img5 from './veg img5.jpg';
//import Menu from './Menu.js';
export default function About(){
    return(
    <>

        <div className="row">
            <div className="col-lg-6">
            <img src={img5} className="ae"/>
            </div>
            <div className="af col-lg-6">
              <h1 className="text-success pl-5">ORGANIC FARM</h1><br/>
              <h1 className="text-danger">Our Promise</h1>
              <p>We bring the season's best mix of organic produce and hand-crafted farm products conveniently to your door by growing and partnering with local farms and artisans in your area.</p>
        
              <input type={"button"} value="LEARN MORE" className="bg-warning text-white btn-outline-warning p-2"/>
            </div>
            
        </div>
        </>
    )
}
