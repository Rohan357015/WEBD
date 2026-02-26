import React, { useEffect, useState } from "react";
import "./box.css";
import{ BrowserRouter,Route,Routes}from 'react-router-dom'
import Login from "./login";
import Register from "./register";
import Home from "./home.jsx";
import Dashboard from "./dashboard";

function App() {
  
  return (
    <>
     
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
     </Routes>  
    </>
  )

}

export default App;
