import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Todo from "./views/Todo/Todo";


const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
      <Todo/>
  )
  
  
