import React from "react"; 
import "./Post.css";
import Data from "./../../data/config.json"
import { Link } from "react-router-dom";
import Imgv from "./image/web.jpeg"
export default function Post(){
    return(

        <>
        <h1 className="text-center p-3 border-bottom bg-dark text-light"> What Does a Front End Web Developer Do?</h1>
       

         <div className="container-wrap"> 
            {
                Data.map((info ,index)=>(
  
                    <div key={index} className="box">
                    <img src={info.img1} className="img" />
                    <h4> {info.title}</h4>
                    <h5> {info.description}</h5>
                       <Link to={`/post/info/${info.id}`}><button className="btn-post"> know more</button> </Link> 
                    </div>
                   
                )
                )
            }
          </div>
        </>
    )
}