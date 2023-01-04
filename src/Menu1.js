import React from "react";
import {Link} from "react-router-dom";

export default function Menu1(){
    return(
        <div className="row">
          <Link to='/Hello' className="m-5"><b>Hello</b></Link>
          <Link to='/CongratsCard' className="m-5"><b>Card</b></Link>
          <Link to='/SuperOverLeague' className="m-5"><b>Super</b></Link>
          <Link to='/Socialbutton' className="m-5"><b>Social</b></Link>
          <Link to='/NotificationsApplication' className="m-5"><b>Notifications</b></Link>
          <Link to='/LoginDesign' className="m-5"><b>Login</b></Link>
          <Link to='/TechnologyCards' className="m-5"><b>Technology</b></Link>
          <Link to='/Responsive' className="m-5"><b>Responsive</b></Link>
          <Link to='/Feedback' className="m-5"><b>Feedback</b></Link>
          <Link to='/Increment' className="m-5"><b>Increment</b></Link>
          <Link to='/Fruitscounter' className="m-5"><b>Fruitscounter</b></Link>
          <Link to='/Datefunction' className="m-5"><b>Datefunction</b></Link>
          <Link to='/Icecream' className="m-5"><b>Icecream</b></Link>
          <Link to='/Fakeapi' className="m-5"><b>Fakeapi</b></Link>
        </div>
    )
}