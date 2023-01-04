import React from "react";
import { Link } from "react-router-dom";

//import Menu from "./Menu.js";

export default function Home(){
    return(
        <>     
  <div className="row home2">
        <div>
         <h1 className=" text-center text-success pt-3">Fresh Food</h1>
         <h1 className="text-danger m-3"><b>Organic</b></h1>
        <p className="ml-3"><b>How your food is grown or raised can have a major impact on your mental and emotional health as well as the environment.</b></p>
         
         <input type={"button"} value="LEARN MORE" className="bg-success text-white btn-outline-success p-2 ml-4"/>

        </div>
      



      </div>
      </>
    );
}