import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Menu1 from "./Menu1";
import StarRatings from "react-star-ratings";
import {useParams} from "react-router-dom";
export default function Fakeapi1(){
 const [fakeapi,setFakeapi] = useState([])
 const {id}=useParams()
 useEffect(()=> {
 fetch("https://fakestoreapi.com/products/"+id)
 .then((Response)=> Response.json())
 .then(data=> setFakeapi(data))
},[])
    
    return(
        <>
  <div class="card mb-3">
   <div class="row col-lg-12 no-gutters">
    <div class="col-lg-6 ">
      <img src={fakeapi.image} className='col-lg-9' alt="..."/>
    </div>
    <div class="col-lg-6 ">
      <div class="card-body mt-5">
        <h5 class="card-title">{fakeapi.title}</h5>
        <h3 className="card-text">${fakeapi.price}</h3>
        <h6>MRP:<del>4000.00</del>(95%)</h6>
        <p className="card-text">{fakeapi.description}</p>
        <a href=" " className="btn btn-warning">Add to Cart</a><br/><br/>
        <a href=" " className="btn btn-warning">Buy Now</a>
      </div>
     </div>
    </div>
  </div>
 </>
);
}

