import React,{useState,useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Menu1 from "./Menu1";
import './Icecream.css'
import StarRatings from "react-star-ratings";
export default function Icecream(){
    const [icecream,setIcecream] = useState([])
    useEffect(
        function biodata(){
            fetch("http://localhost:3000/Icecream.json")
            .then((Response)=> Response.json())
            .then((data)=> {
                console.log(data);
                setIcecream(data)
            })
        },{}
    )

    return(
        <>
        <Menu1/>
        <div className="row bg-primary  p-5">
            {icecream.map((value,index)=>(
            
            <div className="card  col-lg-3 m-5  p-5">
            <img src={value.Image} className="card-img-top container" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{value.Name}</h5>
              <h3 className="card-title">{value.Price}</h3>
              <p className="card-text">{value.Description}</p>
              <p><StarRatings rating={value.Star} starDimension='25px' starSpacing='4px' starRatedColor="yellow"/></p>
              <a href="#" className="btn btn-primary">View More</a>
            
            </div>
           </div>
            ))}
        </div>
        </>
    );
}