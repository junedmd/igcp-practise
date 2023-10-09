import React, { useEffect, useState } from "react";
import "./Information.css";
import data from "./../../data/config.json"
import { useParams } from "react-router-dom";
export default function Information() {

  const {id} =useParams();
  const [post , setpost] = useState ({})

   useEffect(()=>{
    data.forEach((postobj)=>{
        if(postobj.id === id){
            setpost(postobj)
        }  

    })
   }, [id]
   )

    return (
        <>
           

                            <div className="box-info"> 
                                <h1 className=" text-ceter p-2 bg-primary text-light"> {post.title}</h1>
                                <img src={post.img} className="img-frame" />
                                
                                <h3 className=" fs-2 zxc"> {post.description}</h3>
                                <h3> {post.mindes}</h3>
                                <h4> {post.small}</h4 >
                                <p className="fw-bold"> {post.info}</p>
                                {/* <img src={post.img1} className="img-fra" /> */}
                         </div>
                            
                   

        </>
    )
}

