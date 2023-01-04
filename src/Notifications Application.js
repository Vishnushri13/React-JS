import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck,faCheckCircle,faBell,faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import Menu1 from './Menu1';
export default function Notifications(){
    return(
        <>
        <Menu1/>
        <div>
            <h1 className="text-center col-lg-12 ">Notifications</h1>
         <div className="row ab">   
          <div className="bg-primary col-12 m-3 p-3">
              <FontAwesomeIcon icon={faCircleCheck} />
              Information Message           
          </div><br/>
          <div className="bg-success col-12 m-3 p-3">
               <FontAwesomeIcon icon={faCheckCircle}/>
               Success Message
          </div><br/>
          <div className="bg-warning col-12 m-3 p-3">
                <FontAwesomeIcon icon={faBell}/>
                Warning Message
          </div><br/>
          <div className="bg-danger col-12 m-3 p-3">
                <FontAwesomeIcon icon={faExclamationCircle}/>
                Error Message
          </div>
         </div>
        </div>
        </>
    )
}