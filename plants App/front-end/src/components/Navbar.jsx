import React from 'react'

import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="topbarContainer">
    <div className="topbarLeft">
  
      <img src="/assets/person/6.png" alt="" className="topbarImg" />

    </div>

    <div className="topbarRight">
      <Link to="/Login">
    <button className="topbarIconItem" >Login</button>
    </Link>
    <Link to="/Register">
    <button className="topbarIconItem">Register</button>
    </Link>
</div>

    </div>
    
  )
}
