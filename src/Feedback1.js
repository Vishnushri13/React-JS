import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Menu1 from "./Menu1";

export default function Feedback1(){
    return(
        <>
        <Menu1/>
        <div className="fd row">
         <div className="fd1 col-lg-12" >
            <FontAwesomeIcon icon={faHeart} className=" text-danger ml-5 fa-8x"/><br/>Thank You!
            <h1>We will use your feedback to improve our customer support performance </h1>
              
         </div>
        </div> 
        </>
    )
}