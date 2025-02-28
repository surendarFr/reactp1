import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"


const NavBar = () => {
  return (
   <div className="nav">
    <div><h2>Demo</h2></div>
    <ul className="list">
        <li> <Link to="/">Home</Link></li>
        
        <li><Link to="/about">About</Link></li> 
       <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/user">User</Link></li> 
      </ul>
  
   </div>
  )
}

export default NavBar