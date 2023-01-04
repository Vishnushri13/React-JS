import React from "react";
import img11 from './veg img11.png';
import img12 from './veg img12.jpg';
import img13 from './veg img13.jpg';
//import Menu from './Menu.js';
export default function About(){
    return(
      <>
            <div className="al"> 
             <div className="row">
                <div className="col-lg-4 bg-white ml-5 mt-5">
                   <img src={img11}/>
                   <h1>Fresh Fruits</h1>
                   <p>The secret is using fresh, seasonal produce in combination with good quality oils, vinegars or dairy. We choose the organic lifestyle because</p>
                      
                      <h1><u>LEARN MORE</u></h1>

                </div>
                <div className="col-lg-3 bg-white ml-5 mt-5">
                   <img src={img12}/> 
                   <h1>Vegetables</h1>
                   <p>We have all been listening to our mothers saying: eat your vegetables. Scientists also agree: we need to eat 5 portions of vegetables to stay healthy.</p>
                   <h1><u>LEARN MORE</u></h1>  
                </div>
                <div className="col-lg-3 bg-white ml-5 mt-5">
                   <img src={img13}/>
                   <h1>Salad Leaves</h1>
                   <p>One way to motivate yourself to eat more salad this summer is to have a tasty, homemade dressing drizzled on top. Organic food popularity</p>
                   <h1><u>LEARN MORE</u></h1>
                </div>
        </div>  
          <h1 className="am">Image by <u>Freepik</u></h1>
        </div>
        </>
    )
}