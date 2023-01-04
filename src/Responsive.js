import React from "react";

import Home from './Home.js';
import './Home.css';

import Works from './Works.js';
import './Works.css';
 
import About from './About';
import './About.css';

import Farm from './Farm.js';
import './Farm.css';

import Destimonial from './Destimonial.js';
import './Destimonial.css';

import Product from './Product.js';
import './Product.css';


import Food from './Food.js';
import './Food.css';

import Menu from "./Menu.js";
import Menu1 from "./Menu1.js";

export default function Responsive(){
    return(
        <> 
       <div>
        
            <Menu1/>
            <Menu/>
            <Home/>
            <Works/>
            <About/>
            <Farm/>
            <Destimonial/>
            <Product/>
            <Food/>
        </div>
         </>
    )
}