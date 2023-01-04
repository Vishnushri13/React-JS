import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry, faFaceSadTear, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Menu1 from "./Menu1";

export default function Feedback(){
    return(
        <>
        <Menu1/>
        <div className="fe p-5">
            <div className="row fee">
                <h1 className=" col-lg-12 text-center">How satisfied are you with  our <br/> customer support performance?</h1>
                <div className="col-lg-4 text-center">
                <Link to={'/Feedback1'}> <FontAwesomeIcon icon={faFaceSadTear} className="text-warning ml-3 fa-8x"/></Link><br/>Sad 
                </div>
                <div className="col-lg-4 text-center">   
                <Link to={'/Feedback1'}>  <FontAwesomeIcon icon={faFaceAngry} className="text-warning ml-5 fa-8x"/></Link><br/>None
                </div>
                <div className="col-lg-4 text-center">
                <Link to={'/Feedback1'}>  <FontAwesomeIcon icon={faFaceSmile} className="text-warning ml-5 fa-8x"/></Link><br/>Happy
                </div>

            </div>

        </div>
        </>
    );
}