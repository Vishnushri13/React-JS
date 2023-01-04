import React from "react";
import img2 from './img2.png';
import img3 from './img3.png';
import './Congrats Card.css';
import Menu1 from './Menu1';
export default function Card(){
    return(
        <>
        <Menu1/>
        <div className="Cd">
        <h1>Congratulations</h1>
        <br/>
        <div className='Cd1'>
        <div>
        <br/>   
        <img src={img2}/>
        <br/>
        <h1>Kiran V</h1>
        <h3>Vishnu institute of Computer Education and Technology,Bhimavaram</h3>
        </div><br/>
        <div>
        <img src={img3}/>
        </div>
        </div>
        </div>
        </>
    );
}