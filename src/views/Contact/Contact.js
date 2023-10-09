import React from "react";
import "./Contact.css"
import Imglogo from "./image/logo.jpg"
import Imglogo2 from "./image/logo2.png"
import Imghospital from "./image/hos2.webp"
import Imgcell from "./image/cell.jpg"
import Imgemail from "./image/email.jpg"
import Imglocation from "./image/loca.jpg"
import Imgform from "./image/formimg.jpg"
import Footer from "./../../components/Footer/Footer"
export default function Contact() {
    return (
        <>
            <div className="main-container">
                <div className="navbar-conatact">
                    <ul>
                        <li>  HOME</li>
                        <li>  Services</li>
                        <li>  Emenrgeny Number</li>
                        <li>  Staff</li>
                        <li>  Carrers</li>
                        <li>  Contact Us</li>

                    </ul>

                </div>
                <div className="nav-head-contact">

                    <div >  <img src={Imglogo} alt="logo" className="con-logo" /> </div>
                    <div >   <b><span className="nametext">  PATIL GROUP OF  HOSPITAL</span> </b></div>
                    <div>  <img src={Imglogo2} alt="logo" className="con-logo" /> </div>
                </div>

                <div>
                    <img src={Imghospital} className="third-img" />

                </div>
                <div className="con-numbers">
                    <div className="con-text2 " >
                        <img src={Imgcell} className="cell" /> <span className="h4">PHONE </span> 

                    </div>
                    <div className="con-text2" >
                        <h1> 24/7 Helpline</h1>
                        <h2> +91 44 4743 2350 </h2>
                    </div>
                    <div className="con-text2">
                        <h1> Emergency</h1>
                        <h1> +91 4427478000</h1>
                    </div>
                    <div className="con-text2">
                        <h1>Ambulance </h1>
                        <h1> 109876</h1>
                    </div>

                </div>

                <div className="fourth-cont">
                    <div className="con-text3">
                        <img src={Imgemail} className="third-logo" /> <span className="text7"> EMAIL</span><br />
                        <p> patilgroupakrudi786@gmail.com</p>

                    </div>
                    <div className="con-text3">
                        <img src={Imglocation} className="third-logo" />  <span className="text7">   Address</span><br />
                        <p>
                            Patilhospital ,ambedkar chowk ,pimpri-chinchwad.
                        </p>
                    </div>

                </div>
                <div className="loca-embede">
                    <div className="form">
                        <div class="mb-3">
                            <span> <span className="cn-text1"><b>Message Us </b> </span> </span><br />

                            <label for="exampleFormControlInput1" class="form-label">Full name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="full name " />

                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Your messeges</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className=" btn btn-primary"> SEND</button>

                    </div>
                    <div className="form2">
                        <img src={Imgform} className="img-form" />

                    </div>


                </div>
                <div className="cont-footer">
                    <div className="con-text5">
                        <h4 className="con-text4">Hospital Management<br /> like Never Before.</h4>
                        <p className="con-p">An Innovative Healthcare IT Solution,<br /> Featuring a Web-Based Hospital Management System,<br /> Designed to Streamline Operations,<br /> Enhance Patient Care, and Improve Overall Efficiency.</p>
                    </div>
                    <div className="con-text5">
                        <h2 className="con-text6">Quicks Links</h2>
                        <h3 className="con-text6">Home</h3>
                        <h3 className="con-text6">Contact</h3>
                        <h3 className="con-text6">FAQ</h3>
                    </div>
                    <div className="con-text5">
                        <h2 className="con-text6" > Get In Touch</h2>
                        <h3 className="con-text6"> Phone: 044-6700-0000</h3>
                        <h3 className="con-text6"> dean.medical.ktr@srmist.edu.in</h3>
                        <h3 className="con-text6"> <i class="bi bi-facebook"></i>  <i class="bi bi-linkedin"></i> <i class="bi bi-instagram"></i> <i class="bi bi-twitter"></i> </h3>
                    </div>

                </div>

              

            </div>


        </>
    )
}