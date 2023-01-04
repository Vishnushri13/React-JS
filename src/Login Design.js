import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import img from './laptop.png'
import Menu1 from './Menu1';
export default function Login(){
    return(
      <>
       <Menu1/>
       <div className="nam1 containerfluid">

             <div className="row con">
              
                 <div className="col-lg-6 d-flex flex-row justify-content-center">
                  <div className="im">
                    <img src={img} className="container mt-5"/>
                  </div>
                 </div>
                 <div className="col-lg-6 d-flex flex-row justify-content-center">
                   <div className="nam3 pb-3">
                    <form>
                      <div className="col-lg-12">
                        <h1 className="text-center mb-4">Member Login</h1>
                       <input type={"text"} placeholder="Email" className="col-lg-12 mb-4 na p-2"/><br/>

                       <input type={"password"} placeholder="Password" className="col-lg-12 mb-4 na p-2"/><br/>

                       <input type={"button"} className="btn btn-success col-lg-12 na" value={"Login"}/>
                      </div>
                      <p className="mt-5 ml-5">Forgot:<a href=" " className="text-success">Username / Password ?</a></p> 
                      <a href="" className="ml-5 text-success">Create Your Account </a>
                    </form>  
                   </div>     
                  </div>
            
             </div>
        </div>
     </>
    
    
);
}