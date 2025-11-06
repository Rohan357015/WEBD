import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Login from './login.jsx'
import BookInfo from './bookinfo.jsx'
import Register from './register.jsx'

const navbar={
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    height:"50px",
    backgroundColor:"lightgray",
    fontSize:"20px",
}

function Routing() {
    
   
  return (
   <div>
    <nav style={navbar}>
        <Link to="/">BookInfo</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </nav>
    <nav>
    <Routes>
        <Route path='/' element={<BookInfo />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='/register' element={<Register />} />
    </Routes>
    </nav>
   </div>
  )
}

export default Routing
