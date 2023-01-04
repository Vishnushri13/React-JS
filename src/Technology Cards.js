import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import card4 from './card4.png';
import card1 from './card1.png'
import card2 from './card2.png';
import card3 from './card3.png';
import Menu1 from './Menu1';
export default function Technology()
{
    return(
      <>
      <Menu1/>
        <div className="container-fluid nam8 pb-5">
           <h1 className="col-lg-12 text-center">Learn 4.0 Technologies</h1>
           <p className="col-lg-12 text-center mt-5">Get trained by alumni of IITs and top companies like Amazon, Microsoft, Intel, Nivida, Qualcomm, etc. Learn directly from professionals involved in Product Development.</p>
           
           <div class="row">
  <div class="col-sm-6 p-4">
    <div class="card technology-cord1">
      <div class="card-body ">
        <h5 class="card-title">Data Scientist</h5>
        <p class="card-text">Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured and unstructured data,and apply knowledge from data across a broad range of application domains.</p>
        <img src={card4} className='cards1'/>
      </div>
    </div>
  </div>
  <div class="col-sm-6 p-4">
    <div class="card technology-cord2">
      <div class="card-body">
        <h5 class="card-title">IOT Developer</h5>
        <p class="card-text">An IoT developer is one popular role within the larger IoT field, focusing primarily on the creation of software that allows products to function and connect to other devices</p>
        <img src={card2} className='cards1'/>
      </div>
    </div>
 </div>
</div>

<div class="row mt-4 p-4">
  <div class="col-sm-6 ">
    <div class="card technology-cord3">
      <div class="card-body ">
        <h5 class="card-title">VR Developer</h5>
        <p class="card-text">As previously said, video games are not the only business that is utilising AR/VR technology. Museums are also utilising this technology to provide unique visitor experiences. When users scan art items with their camera, one of the most prevalent uses of AR is to provide information about them</p>
        <img src={card3} className='cards1'/>
      </div>
    </div>
  </div>
  <div class="col-sm-6 p-4">
    <div class="card technology-cord4">
      <div class="card-body">
        <h5 class="card-title">ML Engineer</h5>
        <p class="card-text">ML engineers act as a bridge between data scientists who focus on statistical and model-building work and the construction of machine learning and AI systems.</p>
        <img src={card1} className='cards1'/>
      </div>
    </div>
  </div>
 </div>
</div>
</>
);
}    