import React from "react";
import img6 from './veg img6.jpg';
import img7 from './veg img7.jpg';
import img8 from './veg img8.jpg';
import img9 from './veg img9.jpg';
//import Menu from './Menu.js';
export default function About(){
    return(
      <>
    
        <div className="row ag">
          <h1 className="col-12 text-center text-white">About Our Farm</h1>
          <p className="text-white aj">Today, at our second-generation family farm, we keep with our parents' vision by practicing healthy crop rotation, encouraging a diverse ecosystem around the fields, efficiently using local water sources and carefully selecting produce varieties that grow well and taste great.  </p>
     <br/>
     <br/>    
          
<div className="card-deck">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title text-success">VEGETABLES</h5>
      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <img className="card-img-bottom" src={img6} alt="Card image cap"/>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title text-success">HOW IT WORKS</h5>
      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <img className="card-img-bottom" src={img7} alt="Card image cap"/>
  </div>
  <div className="card">
    
    <div className="card-body">
      <h5 className="card-title text-success">FLEXIBILITY</h5>
      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>  
    </div>
    <img className="card-img-bottom" src={img8} alt="Card image cap"/>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title text-success">FARM PRODUCTS</h5>
      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      
    </div>
    <img className="card-img-bottom" src={img9} alt="Card image cap"/>
  </div>
</div>
        
</div>
<br/>
</>
    )
}    