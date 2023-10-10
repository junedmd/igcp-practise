import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./views/Contact/Contact";
import Practise from "./views/Practise/Practise";
import Information from "./views/Information/Information";
import Post from "./views/Post/Post";
import Home from "./views/Home/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
   <Home/>
  )
  
  
