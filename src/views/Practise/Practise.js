import React from "react";
import { Link } from "react-router-dom";
import "./Practise.css";
import Imgfirst from "./image/first.png"
export default function Practise() {
    return (

        <>
            <h1 className=" text-center border-bottom p-3 bg-dark text-light"> How To Become A Front-end Developer .</h1>
            <h2 className=" text-center "> What Does a Front-End Developer Do?</h2>
            <p className=" fs-3 p-4"> A front-end developer is a type of software developer who specializes in creating and designing the user interface (UI) and user experience (UX) of websites and web applications. The primary responsibility of a front-end developer is to ensure that the visual and interactive aspects of a website or application are user-friendly, aesthetically pleasing, and functionally efficient.</p>

            <p className=" fs-2  text-center ">  Front-end developers work with various technologies, tools, and languages, including: </p>
            <img src={Imgfirst} className="img d-block ms-6" />
            
                <Link to="/post">  <h1 > Explre about front-end </h1> </Link>
            
            <p className=" fs-4 p-4 "> 1 . HTML  (HyperText Markup Language) : The standard markup language used to create the structure and layout of web pages.<br />
                2 .   CSS (Cascading Style Sheets) : A stylesheet language used to control the presentation, formatting, and appearance of web pages, such as colors, fonts, and layout.<br />
                3 .  JavaScript: A programming language that allows developers to add interactivity, animations, and other dynamic elements to websites and web applications.</p>



        </>



    )

}