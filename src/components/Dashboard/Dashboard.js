import React from "react";
import "./Dashboard.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Dashboard() {
    const [issetmenu, setIssetmenu] = useState(true)
    const [classname, setClassname] = useState("sidebar-open")

    // function addmenuclass(){
    //     setClassname('')
    //     setIssetmenu(false)

    // }

    // function removemenuclas(){
    //     setClassname("sidebar-open")
    //     setIssetmenu(true)

    // }
    // issetmenu?addmenuclass:removemenuclas
    // {`sidebar ${classname}`}
    let isSidebarOpen = true;
    function toggleMenu() {
        isSidebarOpen = !isSidebarOpen;
        const sidebar = document.getElementById("menu");
        const sidebarClassname = isSidebarOpen ? "sidebar-open" : "sidebar-close";
        sidebar.className = `sidebar ${sidebarClassname}`
    }
    return (
        <>

            <div className="wrap">
                <div className=" sidebar sidebar-open" id="menu">

                    <div className="names"> <span className="nametext1"> Super Admin </span></div>
                    <div className="sidebar-navlinks">
                        <ul>


                            <li>   <Link to="/"><i class="bi bi-house-fill">  Dashboard</i> </Link> </li>
                            <li>  <Link to="/registration">  <i class="bi bi-person-circle"></i> Registartion </Link></li>



                            <div class="dropdown">
                                <p class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <li>  <Link to="/patientdetail">  <i class="bi bi-person-circle"></i> Patient Detail</Link> </li>
                                </p>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>


                    <li> <Link to="/appoinment"> <i class="bi bi-person-circle"></i> Appoinment  </Link></li>
                    <li> <Link to="/ipd"> <i class="bi bi-person-circle"></i> Ipd Patient </Link></li>
                    <li> <Link to="/opd"> <i class="bi bi-clipboard2-check"></i> OPD Patient </Link></li>
                

                </ul>

            </div>

        </div >
            <div className="main">
                <div className="main-navbar">    <i class="bi bi-list" onClick={toggleMenu} ></i>

                </div>
                <div className="main-navbar2">     </div>

            </div>
       
       </div >
        </>
    )
}