import React from "react";
import img2 from "./veg img2.jpg"
import img3 from "./veg img3.jpg"
import img4 from "./veg img4.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf} from "@fortawesome/free-solid-svg-icons";
//import Menu from './Menu.js';
export default function Works(){
    return(
    <>

        <div className="cd p-2">
            <h1 className="text-center"><b>How It Works?</b></h1>
             <p>Organic agriculture, which is governed by strict government standards, requires that products bearing the organic label are produced without the use of taxic and persistent pesticides and synthetic nitrogen fertilizers, antibiotics, synthetic hormones, genetic engineering or other excluded practices, sewage sludge, or irradiation.</p>
        
          <div className="row">
            <div className="col-lg-4 ">
                <img src={img2}/>
            </div>
            <div className="col-lg-4 bg-white">
            
                <h1 className="text-center">Organic Farming</h1>
                <p>Organic farming practices reduce pollution, conserve water, reduce soil erasion, increase soil fertility, and use less energy, is also better for birds</p>
            </div>
            <div className="col-lg-4">
                <img src={img3}/>
            </div>
        </div><br/>
            <div className="row">
            <div className="col-lg-3 bg-white m-3">
                <h1 className="text-center">Animal husbandry</h1>
                <p>The animal production system,may be broadly classified as traditional, conventional and organic with their distinct characteristics. </p>
            </div>
            <div className="col-lg-4 m-3">
               <img src={img4}/>    
            </div>
            <div className="col-lg-3 bg-white m-4">
                <h1 className="text-center">Arable Farming</h1>
                <p>Organic foods often have more beneficial nutrients, such as antioxidonts, than their conventionally-grown counterparts and people with allergies to foods</p>
            </div>
            
            </div>
            
          </div>

 </>   
    );
}