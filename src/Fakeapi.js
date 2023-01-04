import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Menu1 from "./Menu1";
import Fakeapi1 from "./Fakeapi1";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
export default function Fakeapi(){
 const [fakeapi,setFakeapi] = useState([])
 useEffect(()=> {
 fetch("https://fakestoreapi.com/products")
 .then((Response)=> Response.json())
 .then(data=> setFakeapi(data))
 },[])
    
    return(
        <>
        <Menu1/>
        <div className="row p-4 bg-success">
            {fakeapi.map((value,index)=>(
            
            <div className="card col-lg-3 m-5 p-5">
                
             <img src={value.image} className="card-img-top container" alt="..." />
             <div>
             <h5 className="bg-danger text-white">Special Offer today only</h5>
             </div>  
            <div className="card-body">
             <ul>   
              <h5 className="card-title">{value.title}</h5>
              <h3 className="card-title">{value.id}</h3> 
              <p><StarRatings rating={value.rating.rate} starDimension='25px' starSpacing='4px' starRatedColor="yellow"/></p>           
             </ul>
              <Link to = {`/fakeapi1/${value.id}`}><li><a className="btn btn-primary col-lg-12">View More</a></li></Link><br/>
              
            </div>        
           </div>
            ))}
        </div>
        </>
    );
}