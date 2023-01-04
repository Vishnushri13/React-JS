import React from "react";
import {Link} from "react-router-dom";
import img from './veg img1.png';
export default function Menu(){
    return(
        <div className=" home1 row">
          {/* <Link to='/Hello' className="m-5"><b>Hello</b></Link>
          <Link to='/CongratsCard' className="m-5"><b>Card</b></Link>
          <Link to='/SuperOverLeague' className="m-5"><b>Super</b></Link>
          <Link to='/Socialbutton' className="m-5"><b>Social</b></Link>
          <Link to='/NotificationsApplication' className="m-5"><b>Notifications</b></Link>
          <Link to='/LoginDesign' className="m-5"><b>Login</b></Link>
          <Link to='/TechnologyCards' className="m-5"><b>Technology</b></Link> */}
          
          {/* <Link to='/Home' className="ml-5"><b>Home</b></Link>
          <Link to='/Works' className="ml-5"><b>Works</b></Link>
          <Link to='/About' className="ml-5"><b>About</b></Link>
          <Link to='/Farm' className="ml-5"><b>Farm</b></Link>
          <Link to='/Destimonial' className="ml-5"><b>Destimonial</b></Link>
          <Link to='/Product' className="ml-5"><b>Product</b></Link>
          <Link to='/Food' className="ml-5"><b>Food</b></Link> */}
          {/* <Link to='/Responsive' className="ml-5"><b>Responsive</b></Link> */}
        

  
       <div className="col-lg-6">
         <img src={img} className="aa"/>
         <h1 className="pl-3">ORGANIC</h1>
       </div>
       <div className="col-lg-6">

 <nav className="navbar navbar-expand-lg navbar-light ">
  <Link className="navbar-brand" href="#"></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to='/Home'>Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/Works'>Works</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/About'>About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/Farm'>Farm</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/Destimonial'>Destimonial</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/Product'>Product</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/Food'>Food</Link>
      </li>
    </ul>
  </div>
  </nav>
</div><br/>
        
        
        
        
        
        
        </div>
    )
}